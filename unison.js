document.addEventListener('DOMContentLoaded', () => {

  const width = 1000;
  const height = 600;

const treeMap = d3.select('#tree-map')
                    .append('svg')
                    .attr('width', width)
                    .attr('height', height);    


  // ✅ グラデーション定義をここに追加
const defs = treeMap.append('defs');

  //grad-1
const gradient1 = defs.append('linearGradient')
  .attr('id', 'grad-1')
  .attr('x1', '0%')
  .attr('y1', '0%')
  .attr('x2', '100%')
  .attr('y2', '100%');

gradient1.append('stop')
  .attr('offset', '0%')
  .attr('stop-color', '#4285f4');

gradient1.append('stop')
  .attr('offset', '100%')
  .attr('stop-color', '#c681b2'); // 

   //grad-2
const gradient2 = defs.append('linearGradient')
  .attr('id', 'grad-2')
  .attr('x1', '0%')
  .attr('y1', '0%')
  .attr('x2', '100%')
  .attr('y2', '100%');

gradient2.append('stop')
  .attr('offset', '0%')
  .attr('stop-color', '#21bfbc');

gradient2.append('stop')
  .attr('offset', '100%')
  .attr('stop-color', '#bbbcde'); // 





  
                    
  const tooltip = d3.select('body')
                    .append('div')
                    .attr('id', 'tooltip')
                    .style('opacity', 0);

  const drawTreeMap = () => {
    const hierarchy = d3.hierarchy(gameData, (d) => d.children)
                        .sum((d) => d.value)
                        .sort((a, b) => b.value - a.value);

  const createTreeMap = d3.treemap()
                            .size([1000, 600]);



    

    createTreeMap(hierarchy);

    const gameTiles = hierarchy.leaves();
    // console.log(gameTiles); 
    let categories = gameTiles.map((nodes) => nodes.data.category);
    categories = categories.filter((category, index, self) => self.indexOf(category) === index); 
    // console.log(categories);

    const handleMouseover = (event, d) => {
      const mouseX = event.pageX;
      const mouseY = event.pageY;
      const dataName = d.data.name;
      const dataCategory = d.data.category;
      const dataVal = d.data.value;
      tooltip.style('opacity', 0.9)
              .style('left', mouseX + 50 + 'px')
              .style('top', mouseY + 'px')
              .attr('data-value', (d) => dataVal);
      tooltip.html(
        'Name: ' + dataName + '<br/>' +
        'Platform: ' + dataCategory + '<br/>' +
        'Value: ' + dataVal + ' Million'
      )        
    }

    const handleMouseout = () => {
      tooltip.style('opacity', 0);
    }

    const section = treeMap.selectAll('g')
                            .data(gameTiles)
                            .enter()
                            .append('g')
                            .attr('transform', (d) => 'translate(' + d.x0 + ', ' + d.y0 + ')');

    section.append('rect')
            .attr('class', 'tile')
            .attr('fill', (d) => {
              const category = d.data.category;
              let color;
              switch (category) {
                case '1':
                  color = '#ed523c';
                  //color = 'url(#grad-6)'; // ← これがグラデーションの指定
                  break;
                case '2':
                  color = '#c681b2';
                  break;
                case '3':
                  color = '#a09330';
                  break;
                case '4':
                  color = '#529637';
                  break;
                case '5':
                  color = '#a21b37';
                  break;
                case '6':
                  color = '#4285f4';
                  break;
                case '7':
                  color = '#9f4d06';
                  break;
                case '8':
                  color = '#48818b';
                  break;
                case '9':
                  color = '#56447d';
                  break;
                case '10':
                  color = '#bbbcde';
                  break;
                case '11':
                  color = '#4c9c65';
                  break;
                case '12':
                  color = '#d2d0ba';
                  break;
                case '13':
                  color = '#f6c344';
                  break;
                case '14':
                  color = '#9e9f9f';
                  break;
                case '15':
                  color = '#cceb66';
                  break;
                case '16':
                  color = '#21bfbc';
                  break;
                case '17':
                  color = 'url(#grad-1)'; 
                  break;
                case '18':
                  color = 'url(#grad-2)'; 
              }
              return color;
            })
            .attr('data-name', (d) => d.data.name)
            .attr('data-category', (d) => d.data.category)
            .attr('data-value', (d) => d.data.value)
            .attr('width', (d) => d.x1 - d.x0)
            .attr('height', (d) => d.y1 - d.y0)
            .attr('stroke', 'gainsboro')
            .on('mouseover', handleMouseover)
            .on('mouseout', handleMouseout);


    //追加
    const paddingLeft = 6;  // 左に6px
const paddingTop = 10;  // 上に10px（最初の行の高さ）



    
   const fontSizes = {
  OKLO: '26px',
  RTX: '8px',
  AAPL: '20px',
  // 必要に応じて追加
};
    
    section.append('text')
            .selectAll('tspan')
            .data((d) => d.data.name.split(/(?=[A-Z][^A-Z])/g))
            .enter()
            .append('tspan')
            .text((d) => d)
            .attr('x', 8)
         .attr('y', (d, i) => 23 + i * 11)
         //  .style('font-size', 15 + 'px')
      // .style('font-size', (d) => {
  //  if (d === 'OKLO') return '26px';  // ← ここで条件分岐
   // else return '15px';
 // })
      .style('font-size', (d) => fontSizes[d] || '15px')
          .style('fill', 'white')
            .style('font-weight', 'bold');  
  
 





    const legend = d3.select('#legend')
                      .append('svg')
                      .attr('width', width)
                      .attr('height', 100)
                      .style('padding-left', 60 + 'px')
                      .style('padding-top', 10 + 'px');

    const rectSize = 0;                  
    const rectHSpacing = 110;   
    const rectVSpacing = 0;              
    const elementsPerRow = Math.floor(width / rectHSpacing);

    const legendItem = legend.selectAll('g')
                        .data(categories)
                        .enter()
                        .append('g')
                        .attr('transform', (d, i) => {
                          return (
                            'translate(' + (i % elementsPerRow) * rectHSpacing + ', ' +
                            (Math.floor(i / elementsPerRow) * rectSize + rectVSpacing *
                            Math.floor(i / elementsPerRow)) + ')'
                          )
                        });

    legendItem.append('rect')
        .attr('width', rectSize)
        .attr('height', rectSize)                              
        .attr('class', 'legend-item')                  
        .attr('fill', (d) => {
          let color;
          switch (d) {
            case '1':
              color = '#ed523c';
              break;
            case '2':
              color = '#c681b2';
              break;
            case '3':
              color = '#a09330';
              break;
            case '4':
              color = '#a21b37';
              break;
            case '5':
              color = '#a21b37';
              break;
            case '6':
              color = '#4285f4';
              break;
            case '7':
              color = '#9f4d06';
              break;
            case '8':
              color = '#48818b';
              break;
            case '9':
              color = '#56447d';
              break;
            case '10':
              color = '#bbbcde';
              break;
            case '11':
              color = '#4c9c65';
              break;
            case '12':
              color = '#d2d0ba';
              break;
            case '13':
              color = '#f6c344';
              break;
            case '14':
              color = '#9e9f9f';
              break;
            case '15':
              color = '#cceb66';
              break;
            case '16':
              color = '#21bfbc';
              break;
            case 'PSP':
              color = '#C879CB';
              break;
            case 'XOne':
              color = '#C061E8';    
          }
          return color;
        });

    legendItem.append('text')
        .attr('x', rectSize + 6)
        .attr('y', rectSize - 6)
        .style('font-size', 12 + 'px')
        .text((d) => d);            
        
  }


 const url = 'https://ryotdayo.github.io/picksmap/data/main.json';

  let gameData;

  d3.json(url).then(
    (data, error) => {
      if (error) {
        console.log(error);
      } else {
        gameData = data;
        // console.log(gameData);
        drawTreeMap();
      }
    }
  )

});

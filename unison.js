document.addEventListener('DOMContentLoaded', () => {

  const width = 1000;
  const height = 600;

const treeMap = d3.select('#tree-map')
                    .append('svg')
                    .attr('width', width)
                    .attr('height', height);    
                    
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
                  color = '#bb5730';
                  break;
                case '2':
                  color = '#5c7886';
                  break;
                case '3':
                  color = '#9f934b';
                  break;
                case '4':
                  color = '#8aa0ac';
                  break;
                case '5':
                  color = '#cdbc66';
                  break;
                case '6':
                  color = '#577DE5';
                  break;
                case '7':
                  color = '#fbcd78';
                  break;
                case '8':
                  color = '#bbbcde';
                  break;
                case '9':
                  color = '#B3915B';
                  break;
                case '10':
                  color = '#99AE5D';
                  break;
                case '11':
                  color = '#d2d0ba';
                  break;
                case '12':
                  color = '#66E861';
                  break;
                case '13':
                  color = '#c96598';
                  break;
                case '14':
                  color = '#DEC274';
                  break;
                case '15':
                  color = '#7c8a4f';
                  break;
                case '16':
                  color = '#bf8e21';
                  break;
                case 'PSP':
                  color = '#C879CB';
                  break;
                case 'XOne':
                  color = '#C061E8';    
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


    
    section.append('text')
            .selectAll('tspan')
            .data((d) => d.data.name.split(/(?=[A-Z][^A-Z])/g))
            .enter()
            .append('tspan')
            .text((d) => d)
            .attr('x', 3)
         .attr('y', (d, i) => 23 + i * 11)
         //  .style('font-size', 15 + 'px')
       .style('font-size', (d) => {
    if (d === 'OKLO') return '20px';  // ← ここで条件分岐
    else return '15px';
  })
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
              color = '#bb5730';
              break;
            case '2':
              color = '#9f934b';
              break;
            case '3':
              color = '#ebe5e5';
              break;
            case '4':
              color = '#9186B0';
              break;
            case '5':
              color = '#7481CB';
              break;
            case '6':
              color = '#577DE5';
              break;
            case '7':
              color = '#fbcd78';
              break;
            case '8':
              color = '#bbbcde';
              break;
            case '9':
              color = '#B3915B';
              break;
            case '10':
              color = '#99AE5D';
              break;
            case '11':
              color = '#d2d0ba';
              break;
            case '13':
              color = '#c96598';
              break;
            case '14':
              color = '#E6DA57';
              break;
            case '15':
              color = '#7c8a4f';
              break;
            case '16':
              color = '#bf8e21';
              break;
            case '2600':
              color = '#CF91AE';
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

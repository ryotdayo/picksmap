document.addEventListener('DOMContentLoaded', () => {

  const width = 1000;
  const height = 1000;

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

    //grad-3
const gradient3 = defs.append('linearGradient')
  .attr('id', 'grad-3')
  .attr('x1', '0%')
  .attr('y1', '0%')
  .attr('x2', '100%')
  .attr('y2', '100%');

gradient3.append('stop')
  .attr('offset', '0%')
  .attr('stop-color', '#ed523c');

gradient3.append('stop')
  .attr('offset', '100%')
  .attr('stop-color', '#d2d0ba'); // 

  //grad-4
 const gradient4 = defs.append('linearGradient')
  .attr('id', 'grad-4')
  .attr('x1', '0%')
  .attr('y1', '0%')
  .attr('x2', '100%')
  .attr('y2', '100%');

gradient4.append('stop')
  .attr('offset', '0%')
  .attr('stop-color', '#ed523c'); 

gradient4.append('stop')
  .attr('offset', '50%')
  .attr('stop-color', '#c681b2'); 

gradient4.append('stop')
  .attr('offset', '100%')
  .attr('stop-color', '#4285f4'); 

    //grad-5 NVDA
const gradient5 = defs.append('linearGradient')
  .attr('id', 'grad-5')
  .attr('x1', '0%')
  .attr('y1', '0%')
  .attr('x2', '100%')
  .attr('y2', '100%');

gradient5.append('stop')
  .attr('offset', '0%')
  .attr('stop-color', '#9f4d06');

gradient5.append('stop')
  .attr('offset', '100%')
  .attr('stop-color', '#56447d'); // 


      //grad-6 OKLO
const gradient6 = defs.append('linearGradient')
  .attr('id', 'grad-6')
  .attr('x1', '0%')
  .attr('y1', '0%')
  .attr('x2', '100%')
  .attr('y2', '100%');

gradient6.append('stop')
  .attr('offset', '0%')
  .attr('stop-color', '#56447d');

gradient6.append('stop')
  .attr('offset', '100%')
  .attr('stop-color', '#d2d0ba'); // 

  
      //grad-7 SPOT
const gradient7 = defs.append('linearGradient')
  .attr('id', 'grad-7')
  .attr('x1', '0%')
  .attr('y1', '0%')
  .attr('x2', '100%')
  .attr('y2', '100%');

gradient7.append('stop')
  .attr('offset', '0%')
  .attr('stop-color', '#9f4d06');

gradient7.append('stop')
  .attr('offset', '100%')
  .attr('stop-color', '#d2d0ba'); // 


  //grad-8 PLTR
  const gradient8 = defs.append('linearGradient')
  .attr('id', 'grad-7color')
  .attr('x1', '0%')
  .attr('y1', '0%')
  .attr('x2', '100%')
  //.attr('y2', '0%'); // 横方向に流れるグラデーション
  .attr('y2', '100%'); // ← 斜め方向（左上 → 右下）

gradient8.append('stop').attr('offset', '0%').attr('stop-color', '#56447d'); // 
gradient8.append('stop').attr('offset', '16.6%').attr('stop-color', '#9f4d06'); // 
gradient8.append('stop').attr('offset', '33.3%').attr('stop-color', '#bbbcde'); // 
gradient8.append('stop').attr('offset', '50%').attr('stop-color', '#21bfbc'); // 
gradient8.append('stop').attr('offset', '66.6%').attr('stop-color', '#cceb66'); // 
gradient8.append('stop').attr('offset', '83.3%').attr('stop-color', '#f6c344'); // 
gradient8.append('stop').attr('offset', '100%').attr('stop-color', '#d2d0ba'); // 

  //grad-9 SMCI
const gradient9 = defs.append('linearGradient')
  .attr('id', 'grad-9')
  .attr('x1', '0%')
  .attr('y1', '0%')
  .attr('x2', '100%')
  .attr('y2', '100%');

gradient9.append('stop')
  .attr('offset', '0%')
  .attr('stop-color', '#091c91');

gradient9.append('stop')
  .attr('offset', '100%')
  .attr('stop-color', '#4285f4'); // 

    //grad-10 TSLA(26)
 const gradient10 = defs.append('linearGradient')
  .attr('id', 'grad-10')
  .attr('x1', '0%')
  .attr('y1', '0%')
  .attr('x2', '100%')
  .attr('y2', '100%');

gradient10.append('stop')
  .attr('offset', '0%')
  .attr('stop-color', '#21bfbc'); 

gradient10.append('stop')
  .attr('offset', '50%')
  .attr('stop-color', '#9f4d06'); 

gradient10.append('stop')
  .attr('offset', '100%')
  .attr('stop-color', '#56447d'); 

    //grad-11 RBLX (27)
const gradient11 = defs.append('linearGradient')
  .attr('id', 'grad-11')
  .attr('x1', '0%')
  .attr('y1', '0%')
  .attr('x2', '100%')
  .attr('y2', '100%');

gradient11.append('stop')
  .attr('offset', '0%')
  .attr('stop-color', '#f6c344');

gradient11.append('stop')
  .attr('offset', '100%')
  .attr('stop-color', '#529637'); // 

    //grad-12 GLD(28)
 const gradient12 = defs.append('linearGradient')
  .attr('id', 'grad-12')
  .attr('x1', '0%')
  .attr('y1', '0%')
  .attr('x2', '100%')
  .attr('y2', '100%');

gradient12.append('stop')
  .attr('offset', '0%')
  .attr('stop-color', '#529637'); 

gradient12.append('stop')
  .attr('offset', '50%')
  .attr('stop-color', '#4285f4'); 

gradient12.append('stop')
  .attr('offset', '100%')
  .attr('stop-color', '#c681b2'); 

    //grad-13 TQQQ(29)
 const gradient13 = defs.append('linearGradient')
  .attr('id', 'grad-13')
  .attr('x1', '0%')
  .attr('y1', '0%')
  .attr('x2', '100%')
  .attr('y2', '100%');

gradient13.append('stop')
  .attr('offset', '0%')
  .attr('stop-color', '#091c91'); 

gradient13.append('stop')
  .attr('offset', '50%')
  .attr('stop-color', '#48818b'); 

gradient13.append('stop')
  .attr('offset', '100%')
  .attr('stop-color', '#cceb66'); 

   //grad-14 TSLL(30)
 const gradient14 = defs.append('linearGradient')
  .attr('id', 'grad-14')
  .attr('x1', '0%')
  .attr('y1', '0%')
  .attr('x2', '100%')
  .attr('y2', '100%');

gradient14.append('stop')
  .attr('offset', '0%')
  .attr('stop-color', '#ed523c'); 

gradient14.append('stop')
  .attr('offset', '50%')
  .attr('stop-color', '#529637'); 

gradient14.append('stop')
  .attr('offset', '100%')
  .attr('stop-color', '#091c91'); 

    //grad-15 VWO (31)
const gradient15 = defs.append('linearGradient')
  .attr('id', 'grad-15')
  .attr('x1', '0%')
  .attr('y1', '0%')
  .attr('x2', '100%')
  .attr('y2', '100%');

gradient15.append('stop')
  .attr('offset', '0%')
  .attr('stop-color', '#f6c344');

gradient15.append('stop')
  .attr('offset', '100%')
  .attr('stop-color', '#a09330'); // 


  
                    
  const tooltip = d3.select('body')
                    .append('div')
                    .attr('id', 'tooltip')
                    .style('opacity', 0);

  const drawTreeMap = () => {
    const hierarchy = d3.hierarchy(gameData, (d) => d.children)
                        .sum((d) => d.value)
                        .sort((a, b) => b.value - a.value);

  const createTreeMap = d3.treemap()
                            .size([1000, 1000]);



    

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
        'Stock: ' + dataName + '<br/>' +
        'Color: ' + dataCategory + '<br/>' +
        'Value: ' + dataVal + ' percent'
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
                  color = '#000';
                
                  break;
                case '2':
                  color = '#ccc';
                  break;
                case '3':
                  color = '#fff';
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
                  color = '#091c91';
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
                     break;
                case '19':
                  color = 'url(#grad-3)'; 
                   break;
                case '20':
                  color = 'url(#grad-4)'; 
                   break;
                case '21':
                  color = 'url(#grad-5)'; 
                   break;
                case '22':
                  color = 'url(#grad-6)'; 
                   break;
                case '23':
                  color = 'url(#grad-7)'; 
                    break;
                case '24':
                  color = 'url(#grad-7color)'; 
                    break;
                case '25':
                  color = 'url(#grad-9)'; 
                   break;
                case '26':
                  color = 'url(#grad-10)'; 
                   break;
                case '27':
                  color = 'url(#grad-11)'; 
                   break;
                case '28':
                  color = 'url(#grad-12)'; 
                   break;
                case '29':
                  color = 'url(#grad-13)'; 
                   break;
                case '30':
                  color = 'url(#grad-14)'; 
                   break;
                case '31':
                  color = 'url(#grad-15)'; 
              }
              return color;
            })
            .attr('data-name', (d) => d.data.name)
            .attr('data-category', (d) => d.data.category)
            .attr('data-value', (d) => d.data.value)
            .attr('width', (d) => d.x1 - d.x0)
            .attr('height', (d) => d.y1 - d.y0)
            .attr('stroke', 'gainsboro')
             .attr('stroke-width', 3)       // ← ★ 線の太さ（ここを追加・調整）
            .on('mouseover', handleMouseover)
            .on('mouseout', handleMouseout);


    //追加
   // const paddingLeft = 6;  // 左に6px
//const paddingTop = 10;  // 上に10px（最初の行の高さ）



    
   const fontSizes = {
  OKLO: '26px',
     QUBT: '26px',
     HOOD: '26px',
     PLTR: '26px',
     TQQQ: '26px',
     SOXL: '26px',
     NVDL: '26px',
     SMCI: '26px',
     RBLX: '26px',
     NVDA: '26px',
     QBTS: '26px',
     IONQ: '26px',
     RKLB: '26px',
     CLS: '26px',
     FXI: '11px',
     GLD: '11px',
     VEA: '11px',
      NOC: '10px',
     EEM: '11px',
  AAPL: '13px',
  // 必要に応じて追加
};
    
    section.append('text')
            .selectAll('tspan')
            .data((d) => d.data.name.split(/(?=[A-Z][^A-Z])/g))
            .enter()
            .append('tspan')
            .text((d) => d)
            .attr('x', 8)
         .attr('y', (d, i) => 33 + i * 11)
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
            case '':
              color = '#ed523c';
              break;
            case '':
              color = '#c681b2';
              break;
            case '':
              color = '#a09330';
              break;
            case '':
              color = '#a21b37';
              break;
            case '5':
              color = '#a21b37';
              break;
            case '':
              color = '#4285f4';
              break;
            case '':
              color = '#9f4d06';
              break;
            case '':
              color = '#48818b';
              break;
            case '':
              color = '#56447d';
              break;
            case '':
              color = '#bbbcde';
              break;
            case '':
              color = '#091c91';
              break;
            case '':
              color = '#d2d0ba';
              break;
            case '':
              color = '#f6c344';
              break;
            case '':
              color = '#9e9f9f';
              break;
            case '':
              color = '#cceb66';
              break;
            case '':
              color = '#21bfbc';
              break;
            case '':
              color = '#C879CB';
              break;
            case '':
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

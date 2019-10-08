$(document).ready(function(){

  function getData() {
    return Math.random();
  }

var h = document.getElementById('chart-container').clientHeight;
// console.log('what is this bs'+h);

var layout = {
  title: {
    text: '<b>Estimated IQ Response</b>',
    font:{
      family: 'Roboto Mono, monospace',
      // color: '#1ed62d',
      weight: '700'
    }
  },
  margin:{
    l:'30',
    t:'50',
    b:'30',
    r:'30'
  },
  height: h,
  showlegend:'false',
  paper_bgcolor:'rgba(0,0,0,0)',
  plot_bgcolor:'rgba(0,0,0,0)',
  font:{
    color:'#fff'
  },
  xaxis: {

    ticks: "",
    showticklabels: false,
    showgrid: false,
  }
};


var currentiq = 100+10*Math.random();
var maxiq = 300;
var rmax = 0.001;

  Plotly.plot('brain-graph',[{
    y:[currentiq],
    type:'line',
    mode: 'lines',
    line: {
      color:'#1ed62d',
    }
  }],layout);
  var cnt = 1;



  setInterval(function(){
    var newiq = currentiq+rmax*(1-currentiq/maxiq)*currentiq;
    Plotly.extendTraces('brain-graph',{y: [[newiq+Math.random()*10-5]]}, [0]);
    currentiq=newiq;
    cnt++;
    var h = document.getElementById('chart-container').clientHeight;
    var w = document.getElementById('chart-container').clientWidth;
    Plotly.relayout('brain-graph',{
      height: h,
      width: w
    });
    // if(cnt > 51) {
    //   Plotly.relayout('brain-graph',{
    //     xaxis: {
    //       range: [cnt-51,cnt],
    //       ticks: "",
    //       showticklabels: false,
    //       showgrid: false,
    //     }
    //   });
    // }
  },500);
});

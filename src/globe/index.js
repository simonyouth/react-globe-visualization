import React from 'react';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts/dist/echarts';
import 'echarts-gl/dist/echarts-gl.js';
import earth from '../assets/earth.jpg';
import high from '../assets/elev_bump_4k.jpg';
import population from '../data/population.json';
import { po } from '../data/po';
import china from 'echarts/map/json/china.json';
import world from 'echarts/map/json/world';
echarts.registerMap('china', china);
echarts.registerMap('world', world);

class Index extends React.Component {

  handleGlobe = (params) => {
    console.log(params);
  };

  componentWillMount() {
    fetch(population)
      .then(res => res.json())
      .then(res => {

        const data = res.filter(function (dataItem) {
          return dataItem[2] > 0;
        }).map(function (dataItem) {
          return [dataItem[0], dataItem[1], Math.sqrt(dataItem[2])];
        });

        let echartsInstance = this.echartsReact.getEchartsInstance();
        echartsInstance.setOption({
          series: [{
            type: 'bar3D',
            coordinateSystem: 'globe',
            shading: 'lambert',
            bevelSize: 1,
            minHeight: 0.2,
            silent: true,
            itemStyle: {
              color: '#579242'
            },
            data: data,
          }],
        })
      })
      .catch(err => { console.log(err)})
  }


  render() {
    const canvas = document.createElement('canvas');

    const mapChart = echarts.init(canvas, null, {
      width: 4096,
      height: 2048,
      backgroundColor: '#e2e2e2'
    });
    mapChart.setOption({
      backgroundColor: '#00a4ff',
      visualMap: {
        show: false,
        min: 0,
        max: 500000,
        inRange: {
          color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
        },

      },
      series : [
        {
          type: 'map',
          map: 'world',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          boundingCoords: [[-180, 90], [180, -90]],
          data:[
            {name : 'Afghanistan', value : 28397.812},
            {name : 'Angola', value : 19549.124},
            {name : 'Albania', value : 3150.143},
            {name : 'United Arab Emirates', value : 8441.537},
            {name : 'Argentina', value : 40374.224},
            {name : 'Armenia', value : 2963.496},
            {name : 'French Southern and Antarctic Lands', value : 268.065},
            {name : 'Australia', value : 22404.488},
            {name : 'Austria', value : 8401.924},
            {name : 'Azerbaijan', value : 9094.718},
            {name : 'Burundi', value : 9232.753},
            {name : 'Belgium', value : 10941.288},
            {name : 'Benin', value : 9509.798},
            {name : 'Burkina Faso', value : 15540.284},
            {name : 'Bangladesh', value : 151125.475},
            {name : 'Bulgaria', value : 7389.175},
            {name : 'The Bahamas', value : 66402.316},
            {name : 'Bosnia and Herzegovina', value : 3845.929},
            {name : 'Belarus', value : 9491.07},
            {name : 'Belize', value : 308.595},
            {name : 'Bermuda', value : 64.951},
            {name : 'Bolivia', value : 716.939},
            {name : 'Brazil', value : 195210.154},
            {name : 'Brunei', value : 27.223},
            {name : 'Bhutan', value : 716.939},
            {name : 'Botswana', value : 1969.341},
            {name : 'Central African Republic', value : 4349.921},
            {name : 'Canada', value : 34126.24},
            {name : 'Switzerland', value : 7830.534},
            {name : 'Chile', value : 17150.76},
            {name : 'China', value : 1359821.465},
            {name : 'Ivory Coast', value : 60508.978},
            {name : 'Cameroon', value : 20624.343},
            {name : 'Democratic Republic of the Congo', value : 62191.161},
            {name : 'Republic of the Congo', value : 3573.024},
            {name : 'Colombia', value : 46444.798},
            {name : 'Costa Rica', value : 4669.685},
            {name : 'Cuba', value : 11281.768},
            {name : 'Northern Cyprus', value : 1.468},
            {name : 'Cyprus', value : 1103.685},
            {name : 'Czech Republic', value : 10553.701},
            {name : 'Germany', value : 83017.404},
            {name : 'Djibouti', value : 834.036},
            {name : 'Denmark', value : 5550.959},
            {name : 'Dominican Republic', value : 10016.797},
            {name : 'Algeria', value : 37062.82},
            {name : 'Ecuador', value : 15001.072},
            {name : 'Egypt', value : 78075.705},
            {name : 'Eritrea', value : 5741.159},
            {name : 'Spain', value : 46182.038},
            {name : 'Estonia', value : 1298.533},
            {name : 'Ethiopia', value : 87095.281},
            {name : 'Finland', value : 5367.693},
            {name : 'Fiji', value : 860.559},
            {name : 'Falkland Islands', value : 49.581},
            {name : 'France', value : 63230.866},
            {name : 'Gabon', value : 1556.222},
            {name : 'United Kingdom', value : 62066.35},
            {name : 'Georgia', value : 4388.674},
            {name : 'Ghana', value : 24262.901},
            {name : 'Guinea', value : 10876.033},
            {name : 'Gambia', value : 1680.64},
            {name : 'Guinea Bissau', value : 10876.033},
            {name : 'Equatorial Guinea', value : 696.167},
            {name : 'Greece', value : 11109.999},
            {name : 'Greenland', value : 56.546},
            {name : 'Guatemala', value : 14341.576},
            {name : 'French Guiana', value : 231.169},
            {name : 'Guyana', value : 786.126},
            {name : 'Honduras', value : 7621.204},
            {name : 'Croatia', value : 4338.027},
            {name : 'Haiti', value : 9896.4},
            {name : 'Hungary', value : 10014.633},
            {name : 'Indonesia', value : 240676.485},
            {name : 'India', value : 1205624.648},
            {name : 'Ireland', value : 4467.561},
            {name : 'Iran', value : 240676.485},
            {name : 'Iraq', value : 30962.38},
            {name : 'Iceland', value : 318.042},
            {name : 'Israel', value : 7420.368},
            {name : 'Italy', value : 60508.978},
            {name : 'Jamaica', value : 2741.485},
            {name : 'Jordan', value : 6454.554},
            {name : 'Japan', value : 127352.833},
            {name : 'Kazakhstan', value : 15921.127},
            {name : 'Kenya', value : 40909.194},
            {name : 'Kyrgyzstan', value : 5334.223},
            {name : 'Cambodia', value : 14364.931},
            {name : 'South Korea', value : 51452.352},
            {name : 'Kosovo', value : 97.743},
            {name : 'Kuwait', value : 2991.58},
            {name : 'Laos', value : 6395.713},
            {name : 'Lebanon', value : 4341.092},
            {name : 'Liberia', value : 3957.99},
            {name : 'Libya', value : 6040.612},
            {name : 'Sri Lanka', value : 20758.779},
            {name : 'Lesotho', value : 2008.921},
            {name : 'Lithuania', value : 3068.457},
            {name : 'Luxembourg', value : 507.885},
            {name : 'Latvia', value : 2090.519},
            {name : 'Morocco', value : 31642.36},
            {name : 'Moldova', value : 103.619},
            {name : 'Madagascar', value : 21079.532},
            {name : 'Mexico', value : 117886.404},
            {name : 'Macedonia', value : 507.885},
            {name : 'Mali', value : 13985.961},
            {name : 'Myanmar', value : 51931.231},
            {name : 'Montenegro', value : 620.078},
            {name : 'Mongolia', value : 2712.738},
            {name : 'Mozambique', value : 23967.265},
            {name : 'Mauritania', value : 3609.42},
            {name : 'Malawi', value : 15013.694},
            {name : 'Malaysia', value : 28275.835},
            {name : 'Namibia', value : 2178.967},
            {name : 'New Caledonia', value : 246.379},
            {name : 'Niger', value : 15893.746},
            {name : 'Nigeria', value : 159707.78},
            {name : 'Nicaragua', value : 5822.209},
            {name : 'Netherlands', value : 16615.243},
            {name : 'Norway', value : 4891.251},
            {name : 'Nepal', value : 26846.016},
            {name : 'New Zealand', value : 4368.136},
            {name : 'Oman', value : 2802.768},
            {name : 'Pakistan', value : 173149.306},
            {name : 'Panama', value : 3678.128},
            {name : 'Peru', value : 29262.83},
            {name : 'Philippines', value : 93444.322},
            {name : 'Papua New Guinea', value : 6858.945},
            {name : 'Poland', value : 38198.754},
            {name : 'Puerto Rico', value : 3709.671},
            {name : 'North Korea', value : 1.468},
            {name : 'Portugal', value : 10589.792},
            {name : 'Paraguay', value : 6459.721},
            {name : 'Qatar', value : 1749.713},
            {name : 'Romania', value : 21861.476},
            {name : 'Russia', value : 21861.476},
            {name : 'Rwanda', value : 10836.732},
            {name : 'Western Sahara', value : 514.648},
            {name : 'Saudi Arabia', value : 27258.387},
            {name : 'Sudan', value : 35652.002},
            {name : 'South Sudan', value : 9940.929},
            {name : 'Senegal', value : 12950.564},
            {name : 'Solomon Islands', value : 526.447},
            {name : 'Sierra Leone', value : 5751.976},
            {name : 'El Salvador', value : 6218.195},
            {name : 'Somaliland', value : 9636.173},
            {name : 'Somalia', value : 9636.173},
            {name : 'Republic of Serbia', value : 3573.024},
            {name : 'Suriname', value : 524.96},
            {name : 'Slovakia', value : 5433.437},
            {name : 'Slovenia', value : 2054.232},
            {name : 'Sweden', value : 9382.297},
            {name : 'Swaziland', value : 1193.148},
            {name : 'Syria', value : 7830.534},
            {name : 'Chad', value : 11720.781},
            {name : 'Togo', value : 6306.014},
            {name : 'Thailand', value : 66402.316},
            {name : 'Tajikistan', value : 7627.326},
            {name : 'Turkmenistan', value : 5041.995},
            {name : 'East Timor', value : 10016.797},
            {name : 'Trinidad and Tobago', value : 1328.095},
            {name : 'Tunisia', value : 10631.83},
            {name : 'Turkey', value : 72137.546},
            {name : 'United Republic of Tanzania', value : 44973.33},
            {name : 'Uganda', value : 33987.213},
            {name : 'Ukraine', value : 46050.22},
            {name : 'Uruguay', value : 3371.982},
            {name : 'United States of America', value : 312247.116},
            {name : 'Uzbekistan', value : 27769.27},
            {name : 'Venezuela', value : 236.299},
            {name : 'Vietnam', value : 89047.397},
            {name : 'Vanuatu', value : 236.299},
            {name : 'West Bank', value : 13.565},
            {name : 'Yemen', value : 22763.008},
            {name : 'South Africa', value : 51452.352},
            {name : 'Zambia', value : 13216.985},
            {name : 'Zimbabwe', value : 13076.978}
          ],
        }, {
          type: 'map',
          map: 'china',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          boundingCoords: [[-180, 90], [180, -90]],
          label: {
            fontSize:22,
          },
          data: [{name: '河南', value: 1111000}]
        }
      ]
    });
    mapChart.on('click', function (params) {
      console.log(params)
    });


    const option = {
      backgroundColor: '#babebc',
      globe: {
        baseTexture: mapChart,
        highTexture: high,
        displacementScale: 0.1,
        displacementQuality: 'ultra',
        shading: 'lambert',
        postEffect: {
          enable: true,
          SSAO: {
            enable: true,
            radius: 5,
            intensity: 1.5,
            quality: 'high'
          }
        },
        light: {
          ambient: {
            intensity: 0.2
          },
          main: {
            intensity: 0.5,
            shadow: true,
            shadowQuality: 'high'
          },
        },
        viewControl: {
          autoRotate: false
        },
        visualMap: {
          max: 40,
          calculable: true,
          realtime: false,
          inRange: {
            color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
          },
          outOfRange: {
            colorAlpha: 0
          }
        },
        series: []
      },
    };

    const events = {
      'click': this.handleGlobe,
    };

    return (
      <ReactEcharts
        ref={e => this.echartsReact = e}
        style={{height: '100%', width: '100%'}}
        onEvents={events}
        lazyUpdate={true}
        option={option}/>
    )
  }
}

export default Index;
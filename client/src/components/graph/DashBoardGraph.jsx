import { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class DashBoardGraph extends Component {
    
    render() {

        const options = {
            theme: "light2", // "light1", "light2", "dark1", "dark2"
            animationEnabled: true,
            title:{
                text: "Stock Order - Graph"   
            },
            axisX: {
                interval: 1,
                labelFontColor: "darkgray",
				lineThickness: 1,
				gridThickness: 0.3,
                intervalType: "month",
                valueFormatString: "MMM"
            },
            axisY:{
                title: "มูลค่าการซื้อรวม (USD)",
                labelFontColor: "darkgray",
				lineThickness: 1,
				gridThickness: 0.3,
                includeZero: true,
                valueFormatString: "$#0"
            },
            data: [{        
                type: "line",
                markerSize: 12,
                xValueFormatString: "MMM, YYYY",
                yValueFormatString: "$###.#",
                dataPoints: [        
                    { x: new Date(2016, 0, 1), y: 61, indexLabel: "gain", markerType: "triangle",  markerColor: "#6B8E23" },
                    { x: new Date(2016, 1, 1), y: 71, indexLabel: "gain", markerType: "triangle",  markerColor: "#6B8E23" },
                    { x: new Date(2016, 2, 1) , y: 55, indexLabel: "loss", markerType: "cross", markerColor: "tomato" },
                    { x: new Date(2016, 3, 1) , y: 50, indexLabel: "loss", markerType: "cross", markerColor: "tomato" },
                    { x: new Date(2016, 4, 1) , y: 65, indexLabel: "gain", markerType: "triangle", markerColor: "#6B8E23" },
                    { x: new Date(2016, 5, 1) , y: 85, indexLabel: "gain", markerType: "triangle", markerColor: "#6B8E23" },
                    { x: new Date(2016, 6, 1) , y: 68, indexLabel: "loss", markerType: "cross", markerColor: "tomato" },
                    { x: new Date(2016, 7, 1) , y: 28, indexLabel: "loss", markerType: "cross", markerColor: "tomato" },
                    { x: new Date(2016, 8, 1) , y: 34, indexLabel: "gain", markerType: "triangle", markerColor: "#6B8E23" },
                    { x: new Date(2016, 9, 1) , y: 24, indexLabel: "loss", markerType: "cross", markerColor: "tomato" },
                    { x: new Date(2016, 10, 1) , y: 44, indexLabel: "gain", markerType: "triangle", markerColor: "#6B8E23" },
                    { x: new Date(2016, 11, 1) , y: 34, indexLabel: "loss", markerType: "cross", markerColor: "tomato" }
                ]
            }]
        }
        
        return (
            <div>
                <CanvasJSChart options = {options} />
            </div>
        );
    }

}

export default DashBoardGraph;
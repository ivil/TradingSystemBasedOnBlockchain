import * as echarts from 'echarts/core';
import {
    TitleComponent,
    TooltipComponent,
    // ToolboxComponent,    //工具盒（修改数据，还原以及保存图片三个按钮）
    ToolboxComponentOption,
    LegendComponent,
    LegendComponentOption
} from 'echarts/components';
import { PieChart, PieSeriesOption } from 'echarts/charts';
import { LabelLayout } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
    TitleComponent, //引入标题组件
    TooltipComponent,   //引入提示组件
    // ToolboxComponent,
    LegendComponent,
    PieChart,
    CanvasRenderer,
    LabelLayout
]);

type EChartsOption = echarts.ComposeOption<
    ToolboxComponentOption | LegendComponentOption | PieSeriesOption
>;

const pieChart = (el: string, data: any) => {
    var chartDom = document.getElementById(el)!;
    // 调用echarts.getInstanceByDom()方法判断是否已经存在echarts实例
    var myChart = echarts.getInstanceByDom(chartDom)
    if (myChart == null) { // 如果不存在，就进行初始化
        myChart = echarts.init(chartDom);
    } else {
        myChart.dispose()   //不为空则销毁已经存在的实例
    }
    var option: EChartsOption;

    option = {
        title: {
            text: '能源持仓',
            // subtext: 'Fake Data',//潜台词
            left: 'left'
        },
        tooltip: {
            trigger: 'item',
            formatter: (series: any) => {
                // console.log(series.data);
                return `能源名称：${series.data.name}<br/>持有数量：${series.data.count}`
            }
        },
        legend: {
            top: 'bottom'
        },
        // toolbox: {
        //     show: true,
        //     feature: {
        //         mark: { show: true },
        //         dataView: { show: false, readOnly: true },
        //         restore: { show: false },
        //         saveAsImage: { show: true }
        //     }
        // },
        series: [
            {
                name: '能源信息',
                type: 'pie',
                radius: [50, 250],
                center: ['50%', '50%'],
                roseType: 'area',
                itemStyle: {
                    borderRadius: 8
                },
                data: data || [
                    { value: 40, name: 'rose 1' },
                    { value: 38, name: 'rose 2' },
                    { value: 32, name: 'rose 3' },
                    { value: 30, name: 'rose 4' },
                    { value: 28, name: 'rose 5' },
                    { value: 26, name: 'rose 6' },
                    { value: 22, name: 'rose 7' },
                    { value: 18, name: 'rose 8' }
                ]
            }
        ]
    };

    option && myChart.setOption(option);
}

export default pieChart
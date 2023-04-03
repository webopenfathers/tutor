<template>
  <div ref="container" style="height: 800px"></div>
</template>
<script>
import { Graph } from '@antv/x6';
export default {
  data() {
    return {
      grid: {
        nodes: [
          {
            id: 'node1', // String，可选，节点的唯一标识
            x: 40, // Number，必选，节点位置的 x 值
            y: 40, // Number，必选，节点位置的 y 值
            width: 80, // Number，可选，节点大小的 width 值
            height: 40, // Number，可选，节点大小的 height 值
            label: 'hello', // String，节点标签
          },
          {
            id: 'node2', // String，节点的唯一标识
            x: 160, // Number，必选，节点位置的 x 值
            y: 180, // Number，必选，节点位置的 y 值
            width: 80, // Number，可选，节点大小的 width 值
            height: 40, // Number，可选，节点大小的 height 值
            label: 'world', // String，节点标签
          },
        ],
        // 边
        edges: [
          {
            source: 'node1', // String，必须，起始节点 id
            target: 'node2', // String，必须，目标节点 id
          },
        ],
      },
    };
  },
  mounted() {
    this.initDom();
  },
  methods: {
    initDom() {
      const graph = new Graph({
        container: this.$refs.container,
        grid: true,
      });

      // 使用文档：https://x6.antv.vision/zh/docs/tutorial/advanced/react#%E6%B8%B2%E6%9F%93-html-%E8%8A%82%E7%82%B9

      const source = graph.addNode({
        x: 200,
        y: 40,
        width: 120,
        height: 60,
        label: 'rect',
        attrs: {
          body: {
            fill: '#efdbff',
            stroke: '#9254de',
          },
        },
      });

      const target = graph.addNode({
        x: 500,
        y: 40,
        width: 120,
        height: 60,
        label: 'rect',
        attrs: {
          body: {
            fill: '#efdbff',
            stroke: '#9254de',
          },
        },
      });

      graph.addEdge({
        source,
        target,
      });
    },
  },
};
</script>

<style></style>

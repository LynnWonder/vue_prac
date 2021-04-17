<template>
  <div>
    <Ellipsis :content="content"> </Ellipsis>
    <Ellipsis :content="short_content"> </Ellipsis>
  </div>
</template>

<script>
import Ellipsis from './subComponents/Ellipsis'

const content = `
根据发布该消息的某房产大V描述，曾经挂价2.5万元/平方米的香河富力新城，清明推出特价房单价仅8000元/平方米，且买房就送车位。

事实上，在多位香河本地的中介人士看来，当地房价上演“膝斩”并不罕见。香河，这个距离北京副中心——通州直线距离30公里的河北县城，是北京通勤族在环京地区的第二大聚集区。但其房价自限购以来长期不足通州的1/3，也低于环京区域的燕郊、大厂。

“已经触底了。”一位当地中介人士告诉第一财经，北三县（燕郊、大厂、香河）的购买力主要由东三环以东的北京购房者来带动。在2017年北三县限购后，香河的购房需求锐减，库存消化慢。在这一背景下，新的开发商不愿意进入，而旧的开发商回款压力大，只能将新房价格一降再降。

不过，上述中介人士同时表示，从2020年年中开始，对外地人的新房限购政策实际放开，这为开发商“解套”和外地刚需购房者抄底交易提供了契机。然而，由于不少开发商希望以价换量、尽快消化库存、不拖累其他区域的项目，进入2021年后，香河房价继续走低。今年春节前，富力新城的毛坯现房起售价已降至1.15万元/平方米。

连番的降价让部分购房群体陷入观望状态，以期用更低的价格来成交买房。而在清明假期前夕，“富力新城尾盘‘跳水式’降价”的消息传出后，一些需求开始蠢蠢欲动。在香河北部新城的富力新城售楼处，前来看房、购房的北京购房者络绎不绝。截至目前，此次挂出的约300套的特价房源已售出近九成。

`
const short_content = 'this is a test, 短句测试'

export default {
  name: 'App',
  components: {
    Ellipsis,
  },
  data() {
    return {
      content,
      short_content,
      ellipsis: true,
    }
  },
  methods: {
    hideMore(ellipsis) {
      this.ellipsis = ellipsis
    },
  },
}
</script>
<style lang="less" scoped>
.btn {
  color: rgba(64, 158, 255, 1);
  text-decoration: underline;
  cursor: pointer;
}
</style>

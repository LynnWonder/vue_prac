<template>
    <div></div>
</template>

<script>
    import mixin from '../utils/mixin'
    import { getPosition } from '../utils/utils'

    export default {
        mixins: [mixin],
        data() {
            return {
                targetCompId: 'main-page',
                requiredPath: '/',
            }
        },
        mounted(){
            console.info('thisis s s s ')
            console.info('id in====>', this.targetCompId)
        },
        methods: {
            unregisterTarget() {
                this.targetComp.classList.remove('guide-target')
                this.targetComp.removeEventListener('click', this.handleButtonClick)
                console.info('=====>',1)
            },
            registerTarget() {
                this.targetComp.classList.add('guide-target')
                this.targetComp.addEventListener('click', this.handleButtonClick)
                const position = getPosition(this.targetComp)
                this.$emit('move-helper', position)
                this.$emit('update-tip', 'aaa', {
                    tipHint: 'bbb',
                })

                const handPosition = {
                    top: position.top + position.height / 2 + 5,
                    left: position.left + position.width / 2 - 25,
                }
                this.$emit('set-hand', handPosition)
                console.info('=====>',2)
            },
            handleButtonClick() {
                this.goNext()
            },
        },
    }
<template>
    <div></div>
</template>

<script>
    import {mapActions} from 'vuex'
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
        methods: {
            ...mapActions('guide', ['finish']),
            unregisterTarget() {
                this.targetComp.classList.remove('guide-target', 'guide-position-relative')
            },
            registerTarget() {
                this.targetComp.classList.add('guide-target', 'guide-position-relative')
                this.trackPosition()
            },
            trackPosition() {
                const position = getPosition(this.targetComp)
                this.$emit('move-helper', position)
                this.$emit('update-tip', 'Welcome to Your App', {
                    tipPosition: 'bottom',
                    tipHint: {
                        type: 'button',
                        content: 'next',
                        // click: () => this.goNext(true),
                        click: () => this.finish(),
                    },
                })

                const handPosition = {
                    top: position.top + position.height / 2 + 182,
                    left: position.left + position.width / 2 - 20,
                }
                this.$emit('set-hand', handPosition)

                this.trackPositionHandler = setTimeout(() => this.trackPosition(), 16)
            },
        },
        beforeDestroy() {
            if (this.trackPositionHandler) {
                clearTimeout(this.trackPositionHandler)
                this.trackPositionHandler = null
            }
        },
    }
</script>

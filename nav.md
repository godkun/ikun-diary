---
description: 工具导航
layoutClass: nav-layout
outline: [2, 3, 4]
---

<script setup>
import { NAV_DATA } from './nav/data'
</script>
<style src="./nav/index.scss"></style>

# 工具导航

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>

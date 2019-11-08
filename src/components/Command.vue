<template>
    <tr class="command">
        <td>
            <code>{{ code }}</code>
        </td>
        <td>
            {{ $t("command." + name) }}
        </td>
        <td class="tags">
            <span v-for="tag in tags" :key="tag">{{ tag }}</span>
        </td>
    </tr>
</template>

<script>
export default {
    name: 'Command',

    props: {
        name: String,
        code: String,
        tags: Array
    }
}
</script>

<style scoped>
code i {
    font-style: italic;
    color: lighten(#333333, 50%);
}

.tags {
    display: none;
}
</style>

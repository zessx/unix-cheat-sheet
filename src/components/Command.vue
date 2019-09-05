<template>
    <tr class="command">
        <td>
            <code>{{ code }}</code>
        </td>
        <td v-for="(message, langcode) in messages" :key="langcode" :class=langcode>
            {{ message }}
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
        code: String,
        messages: Object,
        tags: Array
    },

    mounted() {
        let commands = [];

        Vue.http.get('commands.yml')
        .then(response => {
            commands = yaml.safeLoad(response.data)
        })
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

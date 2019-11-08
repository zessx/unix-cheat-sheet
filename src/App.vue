<template>
    <div id="app">

        <section>
            <h1>{{ $t("message.title") }}</h1>

            <input type="text" placeholder="..." id="search" data-old="" autofocus>
            <div id="tip">{{ $t("message.escape_to_erase") }}</div>

            <aside class="langs">
                <select v-model="$i18n.locale">
                    <option v-for="(lang, key) in langs" :key="`Lang${key}`" :value="lang">{{ lang | uppercase }}</option>
                </select>
            </aside>

            <table id="sheet">

                <thead>
                    <tr>
                        <th>{{ $t("message.command") }}</th>
                        <th>{{ $t("message.description") }}</th>
                    </tr>
                </thead>

                <tbody>
                    <Command v-for="(command, key) in commands" :key=key :name=key :code=command.code :tags=command.tags />
                </tbody>

            </table>
        </section>

        <footer>
            <a href="https://github.com/zessx/unix-cheat-sheet" target="_blank">{{ $t("message.made_with_love") }} @zessx</a>
        </footer>
    </div>
</template>

<script>
import Command from './components/Command.vue'

export default {
    name: 'app',

    components: {
        Command
    },

    filters: {
        uppercase: value => {
            return value.toUpperCase()
        }
    },

    methods: {
    },

    data() {
        return {
            langs: ['fr', 'en'],
            commands: []
        }
    },

    mounted() {
        fetch('commands.json')
        .then(response => {
            if (response.status == 200) {
                return response.json()
            }
        })
        .then(data => {
            this.commands = data
        })
    }
}
</script>

<style>
* {
    box-sizing: border-box;
    transition: .2s;
}

#app {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    color: #333333;
    background: #efefef;
    overflow-y: scroll;
}

.en,
.fr {
    display: none;
}

body {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    color: #333;
    background: #efefef;
    overflow-y: scroll;
}

body.en,
body.fr {
    display: block;
}
body.en .en,
body.fr .fr {
    display: block;
}
body.en [data-lang="en"],
body.fr [data-lang="fr"] {
    color: #efefef;
    background: #333;
}

section {
    position: relative;
    width: 800px;
    margin: 0 auto;
    padding: 25px;
}

h1 {
    text-align: center;
    margin: 25px auto;
}

.langs {
    position: absolute;
    top: 0;
    right: 25px;
}

[data-lang] {
    cursor: pointer;
    font-size: 12px;
    padding: 2px 5px;
    float: left;
    margin: 0 1px;
    border: 1px solid #333333;
    border-top: none;
    border-radius: 0 0 5px 5px;
    color: #333333;
    background: #efefef;
    user-select: none;
}

[data-lang]:hover,
[data-lang]:focus {
    color: #efefef;
    background: #333333;
}

input {
    display: block;
    width: 100%;
    margin: 25px auto;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid white;
}

input:hover,
input:focus {
    outline: none;
    border-color: #333333;
}

#tip {
    width: 100%;
    margin: -25px auto 0;
    color: lighten(#333333, 50%);
    font-size: 12px;
}

table {
    position: relative;
    width: 100%;
    margin: 25px auto;
    border-radius: 5px;
    border-collapse: collapse;
    background: lighten(#efefef, 4%);
}

tr {
    z-index: 1;
}

tr:nth-child(2n) {
    background: lighten(#efefef, 2%);
}

tr:after {
    content: "Aucun r\00e9sultat";
    position: absolute;
    top: 42px;
    padding: 4px 10px;
    width: 100%;
    z-index: -1;
    box-sizing: border-box;
    border-radius: 0 0 5px 5px;
    background: lighten(#efefef, 4%);
}

td,
th {
    width: 100%;
    padding: 4px 10px;
    border-radius: 0 5px 0 0;
}

td:first-child,
th:first-child {
    width: 40%;
    border-radius: 5px 0 0 0;
}

th {
    text-align: left;
    padding: 10px;
    background: #333333;
    color: #efefef;
}

footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    line-height: 30px;
    font-size: 14px;
    color: #efefef;
    background: #333333;
}

footer a {
    color: inherit;
    text-decoration: none;
}

footer a:hover,
footer a:focus {
    color: darken(#efefef, 20%);
}

@media all and (min-width: 820px) {
    section {
        width: 800px;
    }

    input,
    #tip {
        width: 50%;
    }
}
</style>

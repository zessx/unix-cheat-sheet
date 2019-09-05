import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import yaml from 'js-yaml'

Vue.use(VueResource)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// String.prototype.removeAccents = function() {
//   var r = this.toLowerCase();
//   r = r.replace(new RegExp("[àáâãäå]", 'g'),"a");
//   r = r.replace(new RegExp("æ", 'g'),"ae");
//   r = r.replace(new RegExp("ç", 'g'),"c");
//   r = r.replace(new RegExp("[èéêë]", 'g'),"e");
//   r = r.replace(new RegExp("[ìíîï]", 'g'),"i");
//   r = r.replace(new RegExp("ñ", 'g'),"n");
//   r = r.replace(new RegExp("[òóôõö]", 'g'),"o");
//   r = r.replace(new RegExp("œ", 'g'),"oe");
//   r = r.replace(new RegExp("[ùúûü]", 'g'),"u");
//   r = r.replace(new RegExp("[ýÿ]", 'g'),"y");
//   return r;
// };

// $.expr[":"].contains = $.expr.createPseudo(function(arg) {
//   return function( elem ) {
//       return $(elem).text().removeAccents().indexOf(arg.removeAccents()) >= 0;
//   };
// });

// function getParameterByName(name) {
//   name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
//   var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
//       results = regex.exec(location.search);
//   return results === null ? ", : decodeURIComponent(results[1].replace(/\+/g, " "));
// }

// function searchFor(search) {
//   $('#tip').css('opacity', 0);
//   if(search != '') {
//       $('#tip').css('opacity', 1);
//   }
//   if($('#search').val() != search) {
//       $('#search').val(search);
//   }
//   $('#search').data('old', search);
//   var terms = search.split(' ').join('):contains(');
//   $('#sheet tbody tr').hide();
//   $('#sheet tbody td:contains(' + terms + ')').parent().show();
// }

// function setCookie(name, value, days) {
//   if(days) {
//       var date = new Date();
//       date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
//       var expires = '; expires=' + date.toGMTString();
//   } else {
//       var expires = '';
//   }
//   document.cookie = name + '=' + value + expires + '; path=/';
// }

// function getCookie(name) {
//   name += "=";
//   var cookies = document.cookie.split(';');
//   for(var i = 0, n = cookies.length; i < n; i++) {
//       var cookie = cookies[i];
//       while (cookie.charAt(0) == ' ') {
//           cookie = cookie.substring(1, cookie.length);
//       }
//       if (cookie.indexOf(name) == 0) {
//           return cookie.substring(name.length, cookie.length);
//       }
//   }
//   return null;
// }

// $(function() {

//   var lang = getCookie('lang');
//   if(lang === null) {
//       lang = 'en';
//       setCookie('lang', lang);
//   }
//   $('body').addClass(lang);

//   $('[data-lang]').on('click', function() {
//       var lang = $(this).data('lang');
//       setCookie('lang', lang);
//       $('body').removeClass().addClass(lang);
//   });

//   $('#search').on('propertychange keyup input paste', function(event) {
//       if(event.which == 27) {
//           searchFor('');
//       }
//       if($(this).data('old') != $(this).val()) {
//           searchFor($(this).val());
//       }
//   });
//   searchFor(getParameterByName('s'));

// });


// const commands2 = [
//   // Folders
//   {
//     "code": "pwd",
//     "messages": {
//       "fr": "Affiche le dossier courant",
//       "en": "Displays working directory"
//     },
//     "tags": [
//       "folder", "répertoire", "navigation", "current"
//     ]
//   },
//   {
//     "code": "cd",
//     "messages": {
//       "fr": "Va dans le dossier de l'utilisateur courant",
//       "en": "Changes directory to your home directory"
//     },
//     "tags": [
//       "folder", "répertoire", "navigation"
//     ]
//   },
//   {
//     "code": "cd <i>[dir]</i>",
//     "messages": {
//       "fr": "Change le dossier courant",
//       "en": "Changes current directory"
//     },
//     "tags": [
//       "folder", "répertoire", "navigation"
//     ]
//   },
//   {
//     "code": "cd ~",
//     "messages": {
//       "fr": "Va dans le dossier de l'utilisateur courant",
//       "en": "Changes directory to your home directory"
//     },
//     "tags": [
//       "folder", "répertoire", "navigation"
//     ]
//   },
//   {
//     "code": "cd -",
//     "messages": {
//       "fr": "Retourne au dossier précédent",
//       "en": "Returns to previous directory"
//     },
//     "tags": [
//       "folder", "répertoire", "navigation", "historique", "history"
//     ]
//   },
//   {
//     "code": "ls -l",
//     "messages": {
//       "fr": "Affiche le contenu du dossier courant avec des détails",
//       "en": "Lists contents of current directory with details"
//     },
//     "tags": [
//       "folder", "répertoire", "navigation", "droits", "rights"
//     ]
//   },
//   {
//     "code": "ls -la",
//     "messages": {
//       "fr": "Affiche le contenu du dossier courant avec des détails, incluant les commençant par .",
//       "en": "Lists contents of current directory, including directories starting by ."
//     },
//     "tags": [
//       "folder", "répertoire", "navigation", "droits", "rights"
//     ]
//   },
//   {
//     "code": "ls -lR",
//     "messages": {
//       "fr": "Affiche le contenu du dossier courant de manière récursive",
//       "en": "Recursively lists contents of current directory"
//     },
//     "tags": [
//       "folder", "répertoire", "navigation"
//     ]
//   },
//   {
//     "code": "mkdir <i>[dir]</i>",
//     "messages": {
//       "fr": "Crée un dossier",
//       "en": "Creates a directory"
//     },
//     "tags": [
//       "folder", "répertoire", "création"
//     ]
//   },
//   {
//     "code": "rmdir <i>[dir]</i>",
//     "messages": {
//       "fr": "Supprime un dossier vide",
//       "en": "Deletes a directory"
//     },
//     "tags": [
//       "folder", "répertoire", "suppression", "deletion"
//     ]
//   },
//   {
//     "code": "rm -rf <i>[dir]</i>",
//     "messages": {
//       "fr": "Force la suppression d'un dossier et son contenu",
//       "en": "Deletes a directory and its content"
//     },
//     "tags": [
//       "folder", "répertoire", "suppression", "deletion"
//     ]
//   },
//   {
//     "code": "cp -r <i>[dir1]</i> <i>[dir2]</i>",
//     "messages": {
//       "fr": "Copie un dossier et son contenu",
//       "en": "Copies a directory and its content"
//     },
//     "tags": [
//       "folder", "répertoire", "copier"
//     ]
//   },
//   {
//     "code": "mv <i>[dir1]</i> <i>[dir2]</i>",
//     "messages": {
//       "fr": "Déplace un dossier",
//       "en": "Moves a directory"
//     },
//     "tags": []
//   },
//   {
//     "code": "mv <i>[dir]</i> <i>[newdir]</i>",
//     "messages": {
//       "fr": "Renomme un dossier",
//       "en": "Renames a directory"
//     },
//     "tags": []
//   },

//   // Files
//   {
//     "code": "cat <i>[file]</i>",
//     "messages": {
//       "fr": "Affiche le contenu d'un fichier",
//       "en": "Displays a whole file content"
//     },
//     "tags": [
//       "lecture", "read", "show"
//     ]
//   },
//   {
//     "code": "more <i>[file]</i>",
//     "messages": {
//       "fr": "Affiche le contenu d'un fichier page par page (Espace/Entrée pour naviguer, Q pour quitter)",
//       "en": "Displays file content, page per page (Escape/Enter to navigate, Q to exit)"
//     },
//     "tags": [
//       "lecture", "read", "show"
//     ]
//   },
//   {
//     "code": "head <i>[file]</i>",
//     "messages": {
//       "fr": "Affiche les 10 premières lignes du fichier",
//       "en": "Displays the first 10 lines of a file"
//     },
//     "tags": [
//       "lecture", "read", "show"
//     ]
//   },
//   {
//     "code": "tail <i>[file]</i>",
//     "messages": {
//       "fr": "Affiche les 10 dernières lignes du fichier",
//       "en": "Displays the last 10 lines of a file"
//     },
//     "tags": [
//       "lecture", "read", "show"
//     ]
//   },
//   {
//     "code": "tail -f <i>[file]</i>",
//     "messages": {
//       "fr": "Affiche les 10 dernières lignes du fichier en temps réel (Ctrl+C pour quitter)",
//       "en": "Displays the last 10 lines of a file in real time (Ctrl+C to exit)"
//     },
//     "tags": [
//       "lecture", "read", "show"
//     ]
//   },
//   {
//     "code": "touch <i>[file]</i>",
//     "messages": {
//       "fr": "Crée un fichier",
//       "en": "Creates a file"
//     },
//     "tags": [
//       "création"
//     ]
//   },
//   {
//     "code": "rm <i>[file]</i>",
//     "messages": {
//       "fr": "Supprime un fichier",
//       "en": "Deletes a file"
//     },
//     "tags": [
//       "deletion"
//     ]
//   },
//   {
//     "code": "rm -f <i>[file]</i>",
//     "messages": {
//       "fr": "Force la suppression d'un fichier",
//       "en": "Forces a file deletion"
//     },
//     "tags": []
//   },
//   {
//     "code": "cp <i>[file1]</i> <i>[file2]</i>",
//     "messages": {
//       "fr": "Copie un fichier",
//       "en": "Copies a file"
//     },
//     "tags": [
//       "copie"
//     ]
//   },
//   {
//     "code": "mv <i>[file]</i> <i>[dir]</i>",
//     "messages": {
//       "fr": "Déplace un fichier",
//       "en": "Moves a file"
//     },
//     "tags": []
//   },
//   {
//     "code": "mv <i>[file]</i> <i>[newfile]</i>",
//     "messages": {
//       "fr": "Renomme un fichier",
//       "en": "Renames a file"
//     },
//     "tags": []
//   },
//   {
//     "code": "ln -s <i>[target]</i> <i>[name]</i>",
//     "messages": {
//       "fr": "Crée un lien symbolique",
//       "en": "Create a symbolic link"
//     },
//     "tags": [
//       "file", "fichier"
//     ]
//   },

//   // Archives
//   {
//     "code": "zip -r <i>[file]</i>.zip <i>[folder]</i>",
//     "messages": {
//       "fr": "Archive le contenu d'un dossier dans un .zip",
//       "en": "Archive a folder content in a .zip"
//     },
//     "tags": [
//       "file", "archive", "fichier"
//     ]
//   },
//   {
//     "code": "unzip <i>[file]</i>.zip -d <i>[folder]</i>",
//     "messages": {
//       "fr": "Extrait le contenu d'un .zip dans un dossier",
//       "en": "Extract a .zip content in a folder"
//     },
//     "tags": [
//       "file", "archive", "fichier"
//     ]
//   },

//   // Editors
//   {
//     "code": "nano <i>[file]</i>",
//     "messages": {
//       "fr": "Édite un fichier avec nano",
//       "en": "Edits a file, using nano"
//     },
//     "tags": [
//       "édition", "éditeur", "editor"
//     ]
//   },
//   {
//     "code": "vi <i>[file]</i>",
//     "messages": {
//       "fr": "Édite un fichier avec vi",
//       "en": "Edits a file, using vi"
//     },
//     "tags": [
//       "édition", "éditeur", "editor"
//     ]
//   },

//   // Processes
//   {
//     "code": "top",
//     "messages": {
//       "fr": "Affiche tous les processus en cours d'exécution, et montre les ressources disponibles",
//       "en": "Displays all the processes running on the machine, and shows available resources"
//     },
//     "tags": [
//       "process"
//     ]
//   },
//   {
//     "code": "ps",
//     "messages": {
//       "fr": "Affiche les processus actifs",
//       "en": "Displays active processes"
//     },
//     "tags": [
//       "process"
//     ]
//   },
//   {
//     "code": "kill <i>[pid]</i>",
//     "messages": {
//       "fr": "Tue un processus",
//       "en": "Kill a process"
//     },
//     "tags": []
//   },

//   // Rights
//   {
//     "code": "chmod <i>[octal]</i> <i>[file]</i>",
//     "messages": {
//       "fr": "Change les permissions d'un fichier/dossier",
//       "en": "Changes the permissions of a file/directory"
//     },
//     "tags": [
//       "répertoire", "droits", "rights"
//     ]
//   },
//   {
//     "code": "chmod -R <i>[octal]</i> <i>[dir]</i>",
//     "messages": {
//       "fr": "Change les permissions d'un dossier de manière récursive",
//       "en": "Recursively changes the permissions of a directory"
//     },
//     "tags": [
//       "répertoire", "droits", "rights"
//     ]
//   },

//   // SSH
//   {
//     "code": "ssh <i>[user]</i>@<i>[host]</i>",
//     "messages": {
//       "fr": "Se connecte à une machine en SSH",
//       "en": "Connects to a host via SSH"
//     },
//     "tags": [
//       "hôte"
//     ]
//   },
//   {
//     "code": "ssh -p <i>[port]</i> <i>[user]</i>@<i>[host]</i>",
//     "messages": {
//       "fr": "Se connecte à une machine en SSH sur un port défini",
//       "en": "Connects to a host via SSH on a specified port"
//     },
//     "tags": [
//       "hôte"
//     ]
//   },
//   {
//     "code": "scp -r <i>[dir1]</i> <i>[user]</i>@<i>[host]</i>:<i>[dir2]</i>",
//     "messages": {
//       "fr": "Copie l'intégralité d'un dossier sur un autre machine en utilisant SSH",
//       "en": "Copy a full directory on another machine using SSH"
//     },
//     "tags": [
//       "répertoire", "copier", "distant"
//     ]
//   },
//   {
//     "code": "scp <i>[file]</i> <i>[user]</i>@<i>[host]</i>:<i>[dir]</i>",
//     "messages": {
//       "fr": "Copie un fichier sur une autre machine en utilisant SSH",
//       "en": "Copy a file on another machine using SSH"
//     },
//     "tags": [
//       "copier", "distant"
//     ]
//   },

//   // Date
//   {
//     "code": "date",
//     "messages": {
//       "fr": "Affiche la date et l'heure courante",
//       "en": "Displays the current date and time"
//     },
//     "tags": [
//       "day", "hour", "minute", "second"
//     ]
//   },
//   {
//     "code": "cal",
//     "messages": {
//       "fr": "Affiche le calendrier du mois courant",
//       "en": "Displays this month's calendar"
//     },
//     "tags": [
//       "date", "day"
//     ]
//   },

//   // Tools
//   {
//     "code": "bash",
//     "messages": {
//       "fr": "Redémarre le terminal",
//       "en": "Restarts terminal"
//     },
//     "tags": [
//       "reset"
//     ]
//   },
//   {
//     "code": "man <i>[command]</i>",
//     "messages": {
//       "fr": "Affiche la documentation d'une commande",
//       "en": "Displays a command's manual"
//     },
//     "tags": [
//       "help", "aide"
//     ]
//   },

//   // Webservers
//   {
//     "code": "apachectl configtest",
//     "messages": {
//       "fr": "Vérifie la configuration du serveur Apache",
//       "en": "Check Apache server's configuration"
//     },
//     "tags": ["webserver"]
//   },
//   {
//     "code": "apachectl restart",
//     "messages": {
//       "fr": "Redémarre le serveur Apache",
//       "en": "Restart Apache server"
//     },
//     "tags": ["webserver"]
//   },
//   {
//     "code": "apachectl graceful",
//     "messages": {
//       "fr": "Redémarre le serveur Apache en préservant les connections",
//       "en": "Restart Apache server, preserving connections"
//     },
//     "tags": ["webserver"]
//   },

//   // PostgreSQL
//   {
//     "code": "pg_dump -c -U <i>[username]</i> <i>[dbname]</i> &gt; <i>[outfile]</i>",
//     "messages": {
//       "fr": "Sauvegarde une base de données PostgreSQL (au format SQL)",
//       "en": "Backup a PostgreSQL database (SQL format)"
//     },
//     "tags": [
//       "dump", "bdd"
//     ]
//   },
//   {
//     "code": "psql -U <i>[username]</i> -d <i>[dbname]</i> &lt; <i>[infile]</i>",
//     "messages": {
//       "fr": "Restaure une base de données PostgreSQL (au format SQL)",
//       "en": "Restore a PostgreSQL database (SQL format)"
//     },
//     "tags": [
//       "backup", "bdd"
//     ]
//   },

//   // Disk
//   {
//     "code": "df -h",
//     "messages": {
//       "fr": "Affiche l'espace disponible sur le disque",
//       "en": "Shows available space on the disk"
//     },
//     "tags": [
//       "disk", "disque", "espace", "space"
//     ]
//   },
//   {
//     "code": "df -i",
//     "messages": {
//       "fr": "Affiche les inodes disponible sur le disque",
//       "en": "Shows available inodes on the disk"
//     },
//     "tags": [
//       "disk", "disque", "espace", "space", "inodes"
//     ]
//   },
//   {
//     "code": "du -shk <i>[folder]</i>",
//     "messages": {
//       "fr": "Affiche la taille d'un dossier",
//       "en": "Shows the folder's size"
//     },
//     "tags": [
//       "disk", "disque", "taille", "size", "dossier", "folder"
//     ]
//   },

//   // Search
//   {
//     "code": "find <i>[folder]</i> -type f",
//     "messages": {
//       "fr": "Recherche tous les fichiers dans un dossier",
//       "en": "Search all files in a directory"
//     },
//     "tags": [
//       "search", "recherche", "fichier", "file"
//     ]
//   },
//   {
//     "code": "find <i>[folder]</i> -type d",
//     "messages": {
//       "fr": "Recherche tous les dossiers dans un dossier",
//       "en": "Search all directories in a directory"
//     },
//     "tags": [
//       "search", "recherche", "folder", "dossier"
//     ]
//   },
//   {
//     "code": "find <i>[folder]</i> -user -<i>[user]</i>",
//     "messages": {
//       "fr": "Recherche tous les éléments avec ce propriétaire dans un dossier",
//       "en": "Search all elements with this owner in a directory"
//     },
//     "tags": [
//       "search", "recherche", "droits", "rights", "propriétaire", "owner"
//     ]
//   },
//   {
//     "code": "find <i>[folder]</i> -perm -<i>[octal]</i>",
//     "messages": {
//       "fr": "Recherche tous les éléments avec ces permissions dans un dossier",
//       "en": "Search all elements with these permissions in a directory"
//     },
//     "tags": [
//       "search", "recherche", "droits", "rights"
//     ]
//   },
//   {
//     "code": "find <i>[folder]</i> -perm /<i>[mask]</i>",
//     "messages": {
//       "fr": "Recherche tous les éléments dont les permissions correspondent à ce masque dans un dossier",
//       "en": "Search all elements whose permissions match this mask in a directory"
//     },
//     "tags": [
//       "search", "recherche", "droits", "rights"
//     ]
//   },

//   // Network
//   {
//     "code": "host -v -t <i>[dnsrecord]</i> <i>[domain]</i>",
//     "messages": {
//       "fr": "Vérifie le TTL d'un enregistrement DNS",
//       "en": "Check a DNS record TTL"
//     },
//     "tags": [
//       "network", "réseau", "dns", "ttl"
//     ]
//   },
//   {
//     "code": "nc -zv <i>[host]</i> <i>[port]</i>",
//     "messages": {
//       "fr": "Vérifie l'ouverture d'un port sur un hôte",
//       "en": "Check a port on a distant host"
//     },
//     "tags": [
//       "network", "réseau", "tcp", "port"
//     ]
//   },

//   Users and // groups
//   {
//     "code": "cat /etc/passwd | cut -d: -f1",
//     "messages": {
//       "fr": "Liste tous les utilisateurs",
//       "en": "List all users"
//     },
//     "tags": [
//       "utilisateur", "user", "groupe", "group"
//     ]
//   },
//   {
//     "code": "groups <i>[user]</i>",
//     "messages": {
//       "fr": "Affiche les groupes d'un utilisateur",
//       "en": "List an user's groups"
//     },
//     "tags": [
//       "utilisateur", "user", "groupe", "group"
//     ]
//   },
//   {
//     "code": "useradd -m <i>[user]</i>",
//     "messages": {
//       "fr": "Ajoute un utilisateur",
//       "en": "Create an user"
//     },
//     "tags": [
//       "utilisateur", "user", "groupe", "group"
//     ]
//   },
//   {
//     "code": "passwd <i>[user]</i>",
//     "messages": {
//       "fr": "Change le mot de passe d'un utilisateur",
//       "en": "Change an user's password"
//     },
//     "tags": [
//       "utilisateur", "user", "groupe", "group", "password", "passe"
//     ]
//   },
//   {
//     "code": "getent group  | cut -d: -f1",
//     "messages": {
//       "fr": "Liste tous les groupes",
//       "en": "List all groups"
//     },
//     "tags": [
//       "utilisateur", "user", "groupe", "group"
//     ]
//   },
//   {
//     "code": "usermod -a -G <i>[group]</i> -m <i>[user]</i>",
//     "messages": {
//       "fr": "Assigne un groupe secondaire à un utilisateur",
//       "en": "Assign an user to a secondary group"
//     },
//     "tags": [
//       "utilisateur", "user", "groupe", "group"
//     ]
//   },
//   {
//     "code": "usermod -g <i>[group]</i> -m <i>[user]</i>",
//     "messages": {
//       "fr": "Change le groupe primaire d'un utilisateur",
//       "en": "Change an user's primary group"
//     },
//     "tags": [
//       "utilisateur", "user", "groupe", "group", "shell"
//     ]
//   },
//   {
//     "code": "chsh -s /bin/<i>[shell]</i> <i>[user]</i>",
//     "messages": {
//       "fr": "Change le shell d'un utilisateur",
//       "en": "Change an user's shell"
//     },
//     "tags": [
//       "utilisateur", "user", "groupe", "group", "shell"
//     ]
//   }
// ];
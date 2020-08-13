Playlist
En el header se deberá mostrar arriba a la derecha, la foto del usuario autenticado en la pantalla de login.

Si se accede a esta página pero el usuario no está autenticado, se deberá mostrar el mensaje de que la autenticación es requerida.

Al ingresar por primera vez y todavía no tener canciones agregadas a la playlist, ni tampoco resultados de busqueda, se deberá mostrar el blank state como indica el diseño en Figma.

Al buscar una canción en el campo de busqueda y presionar enter, se deberá buscar la canción en la base de datos songData.json por name y en caso de que exista la canción mostrarla en los resultados de búsqueda. Se valorará (opcional) la busqueda por texto "no exacto", por ejemplo: Si el usuario busca "a las" se deberá mostrar la canción "A las nueve", sin importar completar el texto completo o utilizar mayusculas y minusculas.

Al presionar en el botón "Agregar" en los resultados de búsqueda, se deberá agregar la canción a la playlist que se está creando. Se valorará (opcional) hacer un control de no agregar canciones repetidas a la lista.

En la playlist, se deberá contar con dos botones para votar o eliminar voto de las canciones agregadas. Al presionarlos la lista se debe ir ordenado de forma descendete, las canciones con más votos primero.

Reto: Agregar un botón eliminar canción en la playlist que permita eliminar la canción de la misma.

Cuando este bacio
-input

Mui
-AppBar
-table
-card

Cuando tenga pistas...
-table
    boton de agregar pista
-table
    boton de like y dislike
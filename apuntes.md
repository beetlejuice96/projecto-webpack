## Tema: Optimización: hashes, compresión y minificación de archivos

    -Los recursos que se guardan en memoria cache suceden cuando el navegador entra a un sitio por primera vez detecta los recursos y los guarda. 
      Por ello la siguiente vez sera mucho más rápido porque estarán en memoria
        
        *La desventaja esta cuando sacamos una nueva versión, porque tendrán un mismo nombre evitando que se descargue los nuevos cambios, 
         por lo tanto, el usuario no recibirá los nuevos cambios
        *Para que no haya conflictos con la cache una vez que tengamos nuestro proyecto en producción es importante darles un hash para cada nueva versión

    -terserwebpack ya viene instalado en webpack 5 pero no es tan personalizable

## Tema: Webpack Alias

Alias ⇒ nos permiten otorgar nombres paths específicos evitando los paths largos
Para crear un alias debes agregar la siguiente configuración a webpack

 alias forma parte del objeto resolve el cual nos permite configurar la forma en que webpack resolverá los módulos incorporados.
 En nuestro camino, tenemos dos:

resolve.alias - para crear atajos que optimizan el tiempo de búsqueda e incorporación de módulos (commonJS o ES6)
resolve.extensions - para darle prioridad en resolución para con las extensiones donde si hay archivos nombrados igualmente, pero con diferentes extensiones, webpack resolverá conforme están listados.


## Tema : webpack en modo desarrollo

1. se borra el optimizador ya que en dev no es tan necesario.
2. despues del output ponemos el modo dev "mode:development"

// se configura el package.json

1. en el script de "dev" colocamos el comando "webpack --config <nombre del archivo webpack de dev>.config.dev.json"

  el comando para modo dev sigue siendo "npm run dev"


##Tema : webpack en modo produccion

  Lo unico que se habla de este tema es instalar un plugin para limpiar hashes viejos de
  esto esta bueno pero se esta volviendo obsoleto, webpack ya tiene un flag que se puede habilitar para limpiar esto.(https://webpack.js.org/guides/output-management/#cleaning-up-the-dist-folder)
  al plugin se lo quiere deprecar.(https://github.com/johnagan/clean-webpack-plugin/issues/197)


##Tema modo watch

  El modo watch hace que nuestro proyecto se compile de forma automática
  Es decir que está atento a cambios
  Para habilitarlo debemos agregar la bandera watch en TRUE en el el archivo de config de webpack
  o si no se puede hacer al momento de lanzar el comando en la termminal

## Tema webpack devServer

  -HTML5 History API permite la manipulación de session history del navegador, 
   es decir las páginas visitadas en el tab o el frame en la cual la página está cargada.
  -Cuando trabajamos con webpack deseamos ver los cambios en tiempo real en un navegador para esto utilizamos webpack-dev-server
  -en la configuracion observamos estos nombres:
      --contentBase ⇒ Le dice al servidor donde tiene que servir el contenido, solo es necesario si quieres servir archivos estáticos
      --compress ⇒ Habilita la compresión gzip
      --historyApiFallback ⇒ cuando estas usando HTML5 History API la página index.html sera mostrada en vez de una respuesta 404
      --port ⇒ es el puerto donde vamos a realizar las peticiones

  -si usamos este modo deberiamos desabilitar la opcion de "watch" ya que por defecto este modo pone a watch en true

##Tema webpack BundleAnalyzer

  -Cuando tenemos un proyecto es buena idea poder revisar su impacto en tamaño por ese motivo webpack nos ofrece un paquete para poder verificar y analizar el tamaño del bundle final.

##Tema webpack devtools

  --Algo particular para poder revisar nuestro codigo es el modo DEVTOOLS que nos hara un mapa para poder ver a forma mas detallada cualquier cosa o problema que podamos tener.
 
    En la configuracion de desarrollo tenemos que agregar abajo del mode el codigo: devtool: 'source-map';

  Y al momento de compilar en DEV podremos ver un nuevo archivo donde vendra tood el codigo que hicimos pero es dificil de entender o de debuggear. 
  Por eso existen los mapas y al momento de inspeccionar en el apartado de sources ahi podremos ver que google nos da la opcion de ver el mapa y ver parte por parte nuestro codigo.


##Configuración de Webpack 5 para React.js

esto se esta realizando en el proyecto que se encuentra en el link : https://github.com/beetlejuice96/ListaRick-Morty


##Configuración de plugins y loaders para React

##Configuracion de webpack para css en React
- cambiar style-loader por MiniCssExtractPlugin.loader


#Optimización de Webpack para React

#deploy

El proyecto que estabamos probando con webpack(https://github.com/beetlejuice96/ListaRick-Morty) lo deployamos en netlify y este es el link https://nifty-pare-f04b7d.netlify.app/




***

# <span style="color: lightblue">Añadiendo responsividad con Tailwind CSS</span>
## Introducción a Tailwind CSS
> Tailwind CSS es un framework CSS de utilidad primero que permite a los desarrolladores diseñar directamente en HTML. Proporciona utilidades de diseño responsivo utilizando puntos de interrupción (sm, md, lg y xl). Estos puntos de interrupción corresponden a diferentes tamaños de pantalla, permitiendo que el diseño se adapte a varios dispositivos, desde pequeñas pantallas móviles hasta grandes monitores de escritorio.
Clases clave de Tailwind utilizadas
1.	<b>flex y flex-col</b>
    <ul>
        <li>flex: Activa el diseño de flexbox, permitiendo una fácil alineación y distribución de los elementos secundarios (los elementos dentro de él) a lo largo de una fila o columna</li>
        <li>flex-col: Por defecto, organiza los elementos secundarios verticalmente en un diseño de columna, apilándolos uno debajo del otro</li>
    </ul>
2.	<b>md:flex-row</b>
    <ul>
        <li>md:: Un prefijo responsivo que se dirige a pantallas medianas (768px y más grandes)</li>
        <li>flex-row: Cambia el diseño del contenedor flex de una columna a una fila en pantallas medianas y más grandes, organizando los elementos secundarios horizontalmente uno al lado del otro</li>
    </ul>
3.	<b>w-full y md:w-1/4</b>
    <ul>
        <li>w-full: Establece el ancho del elemento al 100% de su contenedor padre, haciéndolo de ancho completo en pantallas pequeñas</li>
        <li>md:w-1/4: En pantallas medianas y más grandes, establece el ancho del elemento al 25% del contenedor, haciéndolo más compacto y permitiendo un diseño horizontal</li>
    </ul>
4.	<b>p-4</b>
    <ul>
        <li>p-4: Agrega un padding de 1rem (16px) a todos los lados del elemento, proporcionando un espaciado consistente alrededor del contenido y mejorando el atractivo visual</li>
    </ul>
5.	<b>min-h-screen</b>
    <ul>
        <li>Asegura que la altura del elemento sea al menos tan alta como la altura del viewport, de modo que el diseño llene la pantalla incluso si el contenido dentro es mínimo</li>
    </ul>
6.	<b>bg-*</b>
    <ul>
        <li>Las clases bg-* se utilizan para establecer colores de fondo, como bg-gray-100, que ayudan a distinguir diferentes secciones y mejorar la claridad visual general del diseño</li>
    </ul>

    ***

# <span style="color: lightblue">Agregando responsividad con Bootstrap</span>
## Introducción a Bootstrap
>Bootstrap es un marco de trabajo CSS popular con componentes pre-diseñados y un poderoso sistema de cuadrícula. Simplifica la responsividad con clases como col-* y componentes de navegación integrados.
Clases clave de Bootstrap utilizadas
1.	<b>navbar y navbar-expand-lg</b>
    <ul>
        <li><span style="color: violet; font-weight: bold">navbar</span>: Crea una barra de navegación con características integradas como alineación de texto, color de fondo y soporte para menús desplegables.</li>
        <li><span style="color: violet; font-weight: bold">navbar-expand-lg</span>: Hace que la barra de navegación se expanda horizontalmente en pantallas grandes. En pantallas más pequeñas, se colapsa en un menú hamburguesa (tres líneas horizontales) que revela el menú al hacer clic.</li>
        <li><span style="color: violet; font-weight: bold">Juntas</span>: La combinación de navbar y navbar-expand-lg crea una barra de navegación responsiva que se adapta a diferentes tamaños de pantalla, expandiéndose en pantallas grandes y colapsándose en las más pequeñas.</li>
    </ul>
2.	<b>Clases col-*</b>
    <ul>
        <li><span style="color: violet; font-weight: bold">col-12</span>: En el sistema de cuadrícula de Bootstrap, col-12 hace que el elemento ocupe el 100% de ancho en pantallas extra pequeñas y pequeñas, apilando los elementos verticalmente en dispositivos móviles.</li>
        <li><span style="color: violet; font-weight: bold">col-md-3</span>: Para pantallas medianas (768px y más grandes), col-md-3 establece el ancho del elemento en 25%, permitiendo que se sitúe junto a otros elementos en un diseño horizontal.</li>
        <li><span style="color: violet; font-weight: bold">col-md-6</span>: En pantallas medianas y más grandes, col-md-6 hace que el elemento ocupe el 50% de ancho, asegurando un diseño equilibrado.</li>
        <li><span style="color: violet; font-weight: bold">Juntas</span>: Combinar col-12 para pantallas pequeñas y col-md-* para pantallas medianas y grandes asegura un diseño responsivo que se ajusta dinámicamente.</li>
    </ul>
3.	<b>p-3</b>
    <ul>
        <li><span style="color: violet; font-weight: bold">p-3</span>: Agrega 1rem (16px) de relleno a todos los lados de un elemento, asegurando que haya espacio dentro, evitando que el contenido toque los bordes y mejorando el atractivo visual del diseño.</li>
    </ul>
4.	<b>bg-danger, bg-primary, bg-warning y bg-success</b>
    <ul>
        <li><span style="color: violet; font-weight: bold">bg-*</span>: Estas clases aplican colores de fondo específicos a los elementos, ayudando a distinguir secciones y mejorando la claridad visual.</li>
    </ul>
5.	<b>navbar-toggler y navbar-toggler-icon</b>
    <ul>
        <li><span style="color: violet; font-weight: bold">navbar-toggler</span>: Un botón utilizado para alternar la visibilidad de los elementos del menú en la barra de navegación en pantallas más pequeñas, mostrando u ocultando los enlaces.</li>
        <li><span style="color: violet; font-weight: bold">navbar-toggler-icon</span>: Muestra el ícono de “menú hamburguesa” (tres líneas horizontales) dentro del botón, indicando el menú colapsable.</li>
    </ul>

***

# <span style="color: lightblue">Comparación entre Tailwind CSS y Bootstrap</span>
<table style="auto">
    <tr>
        <th>Característica</th>
        <th>Tailwind CSS</th>
        <th>Bootstrap</th>
    </tr>
    <tr>
        <th><span style="color: violet; font-weight: bold">Enfoque</span></th>
        <td>Utilidad primero, permite una personalización completa</td>
        <td>Componentes y estilos predefinidos</td>
    </tr>
    <tr>
        <th><span style="color: violet; font-weight: bold">Personalización</span></th>
        <td>Alto nivel de personalización y flexibilidad</td>
        <td>Flexibilidad limitada, se basa en componentes pre-diseñados</td>
    </tr>
    <tr>
        <th><span style="color: violet; font-weight: bold">Curva de aprendizaje</span></th>
        <td>Más pronunciada, requiere comprensión de CSS</td>
        <td>Más fácil, clases y componentes integrados</td>
    </tr>
    <tr>
        <th><span style="color: violet; font-weight: bold">Tamaño del archivo</span></th>
        <td>Más pequeño, ya que se pueden eliminar estilos no utilizados</td>
        <td>Más grande, ya que incluye todos los componentes por defecto</td>
    </tr>
    <tr>
        <th><span style="color: violet; font-weight: bold">Control de diseño</span></th>
        <td>Control total sobre el diseño y el layout</td>
        <td>Control limitado sin sobrescribir estilos predeterminados</td>
    </tr>
    <tr>
        <th><span style="color: violet; font-weight: bold">Sistema de cuadrícula</span></th>
        <td>Sistema de cuadrícula basado en Flexbox</td>
        <td>Sistema de cuadrícula de 12 columnas con anchos predefinidos</td>
    </tr>
    <tr>
        <th><span style="color: violet; font-weight: bold">Componentes</span></th>
        <td>Sin componentes pre-diseñados</td>
        <td>Ofrece una variedad de componentes pre-diseñados como botones, modales, formularios</td>
    </tr>
</table>


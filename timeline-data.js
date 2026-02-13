// Datos de la línea de tiempo histórica
// Cada momento representa un hito en la transformación del modelo de atención

const timelineData = [
  {
    id: 'positivismo',
    year: '01',
    title: 'Contexto social',
    subtitle: 'Transformaciones sociales y orden estatal',
    color: '#1e3a5f', // Azul profundo
    content: `
            <p>
                La gran inmigración europea que recibió la República Argentina durante la primera mitad del siglo XX implicó un cambio demográfico importante en la sociedad. Muchos inmigrantes enfrentaron amplias dificultades en la integración laboral, no contaban con participación política y quedaron relegados a formar una población pasiva y manipulable.
            </p>
            <p>
                El impacto político y económico que representó este suceso implicó la toma de medidas estatales para ordenar la sociedad. ¿Quiénes podían integrarse laboralmente? ¿Cómo diferenciar lo sano de lo patológico? 
            </p>
           <p>
                Para dar lugar al ordenamiento social, los criterios clínico-criminológicos se agudizaron y toda disfunción quedó catalogada como patológica, toda enfermedad a vincularse con la inmoralidad, con la delincuencia y con la locura. Simultáneamente, las políticas públicas que permitirían la legitimación de los derechos sociales eran desentendidas expresamente por el aparato estatal. 
            </p>
        `,
  },
  {
    id: 'reforma',
    year: '02',
    title: 'Consolidación positivista',
    subtitle: 'Ciencia y clasificación',
    color: '#8b4513', // Marrón/terracota
    content: `
            <p>
                La influencia de las producciones de Europa continental se manifestó en la adopción del enfoque positivista en el ámbito universitario, donde se promovía una psicología en términos de ciencia objetiva, natural y de fundamento fisiológico o neurológico, y se buscaba la validez experimental dentro de laboratorios. 
            </p>
            <p>
               En este contexto, en 1902 se crearon los primeros Laboratorios de Psicología Experimental en la Universidad de Buenos Aires. En ellos, figuras como Horacio Piñero y José Ingenieros contribuyeron, con sus desarrollos en el campo de la criminología y la psicopatología, a la idea de que la anormalidad podía ser identificada, clasificada y gestionada científicamente.
            </p>
            <p>
              La psicología positivista resultaba particularmente funcional al Estado del momento, ya que los diagnósticos permitían detectar déficits e impedimentos concretos para una satisfactoria integración laboral. Esto derivó en un paradigma asilar que llevaba a institucionalizar en hospicios o cárceles, y con ello garantizar cierto ordenamiento social, lo que resultó una solución estratégica al problema de la inmigración.          
            </p>
        `,
  },
  {
    id: 'higiene',
    year: '03',
    title: 'Dispositivos de encierro',
    subtitle: 'Hospicios y cárceles',
    color: '#2d5f4f', // Verde oscuro
    content: `
            <p>
                En el ámbito clínico, Horacio Piñero (1869-1919), médico fisiólogo, fundó el primer Laboratorio de Psicología Experimental con el objetivo de estudiar sujetos en observación mediante la observación directa de su conducta. A partir del estudio de la anormalidad, se pretendía inferir el funcionamiento de la normalidad. Clasificaban al sujeto determinantemente como normal o anormal, y de ser el último caso, se derivaba a una institución para su tratamiento.
            </p>
                    <figure class="content-image">
            <img src="https://www.psi.uba.ar/museo/historia/imagenes/laboratorio01_g.jpg" alt="Laboratorio Experimental de Psicología">
            <figcaption>Horacio Piñero en el Laboratorio de Psicología Experimental, Universidad de Buenos Aires.</figcaption>
        </figure>
        
        <p>
        En el ámbito criminológico, José Ingenieros (1877-1925) fue un médico, criminólogo y sociólogo que confeccionó el primer registro de sistematización del estudio del delincuente en Argentina. Le atribuyó al delincuente y alienado mental una etiología común, congénita, hereditaria y degenerativa. 
        </p>
        <p>
        Desde 1904 estuvo a cargo de la Sala de Observación de Alienados, una dependencia de la Policía Federal que tenía la finalidad de recluir como forma preventiva y dar tratamiento a individuos afectados con algún padecimiento mental, personas en situación de calle o abandonados por su familia. Sin embargo, quienes frecuentaban la Sala eran mayoritariamente inmigrantes, prostitutas y borrachos, entre otros. 
        </p>
        <figure class="content-image">
<img src="https://imagoteca.cedinci.org/files/large/24341d9858047b5e5a7cf30508303a1e19d33892.jpg" alt="Sala de Observación de Alienados">
<figcaption>José Ingenieros con sus estudiantesen la Sala de Observación de Alienados, dependencia de la Policía Federal.</figcaption>
</figure>
            <p>
                Era un lugar de tránsito con un lapso de reclusión breve de entre 24 y 48 horas. En esta Sala se observaban y evaluaban las conductas de los sujetos y se hacía un diagnóstico con el fin de ver la evolución del comportamiento del individuo.  En el caso de restablecerse, la persona era puesta en libertad. Si se detectaban alteraciones mentales, se lo derivaba a la institución correspondiente (cárcel u hospicio). 
            </p>
            <p>
                Del mismo modo funcionaba el Instituto de Criminología, creado en 1907 por el dr. Ingenieros. Fue un lugar de tránsito al que eran derivadas las personas sospechosas de tener algún padecimiento mental para ser observadas, evaluadas y diagnosticadas. En caso de determinarse que el sujeto padecía de alguna alienación mental, era derivado al Pabellón Lucio Meléndez. En caso de probarse su sanidad, a la cárcel.
            </p>
            <p>
                El Pabellón Lucio Meléndez funcionó en el Hospicio de las Mercedes (actual Hospital Borda, neuropsiquiátrico de hombres en la Ciudad de Buenos Aires), donde se alojaron principalmente los delincuentes derivados del Instituto de Criminología y de la Sala de Observación de Alienados. Esta institución era de internación permanente. 
            </p>
            <figure class="content-image">
<img src="https://scontent.fmex1-4.fna.fbcdn.net/v/t39.30808-6/513237448_30074157808898342_2926289142687201339_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=rtEJ7PglbzwQ7kNvwHhKrPQ&_nc_oc=AdmKxFnME2IIS2gVIZZ8GXdK60GqM2uh_pPFCf6GUI687z611CnU7tbpk0xLc2vu34uN9IL9lWnBHn05DB8knxuG&_nc_zt=23&_nc_ht=scontent.fmex1-4.fna&_nc_gid=Z-QTI_TnT0j5Yf8kpC9TkQ&oh=00_Aftpmh-na_fAdSTVp0e8qtKVvMlV5vMu3jrieSvGniyuUg&oe=69949D64" alt="Pabellón Lucio Meléndez">
<figcaption>Grupo de alienados, Hospicio de las Mercedes.</figcaption>
</figure>
        `,
  }
];

// Exportar para uso en otros módulos (compatibilidad)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = timelineData;
}


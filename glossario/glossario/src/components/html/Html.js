export default function Html() {
    return (
        <body>
            <header>
                <h1>HTML</h1>
                <hr></hr>
                <i>
                    L'HTML (HyperText Markup Language) è un linguaggio che rappresenta la
                    struttura di una pagina web.<br></br>
                    Per creare un file html, dobbiamo utilizzare l'estensione
                    <u>.html</u>.
                    <br></br>
                    Per scrivere la struttura di un file HTML, utiliziamo dei tag &lt;&gt;.
                    <br></br>
                    La maggior parte di questi tag si aprono e si chiudono
                    &lt;&gt;&lt;/&gt;.<br></br>
                    Ogni Tag rappresenta qualcosa che vogliamo andare a "costruire"
                    all'interno della nostra struttura HTML. Ci sono alcuni Tag di default
                    quando si crea un file html. Il tag &lt;head&gt;&lt;head/&gt; è un tag
                    dove all'interno vengono visualizzate tutte delle informazioni utili per
                    il programmatore, ma che non vengono visualizzate a video. <br></br>
                    Un altro tag importate è &lt;body&gt;&lt;body/&gt;, che a differenza di
                    &lt;head&gt;&lt;head/&gt;, contiene tutte le informazioni che si
                    vogliono far visualizzare nella pagina.
                </i>
                <hr></hr>
                <i>Qui di seguito riporto alcuni dei tag più utilizzati:</i>
            </header>
            <section class="tabella">
                <table>
                    <caption></caption>
                    <thead>
                        <tr>
                            <th scope="row">TAG</th>
                            <th scope="row">UTILIZZO</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>&lt;p&gt;</td>
                            <td>
                                Il &lt;p&gt; (paragrafo)viene normalmente utilizzato per i testi
                            </td>
                        </tr>
                        <tr>
                            <td>&lt;i&gt;</td>
                            <td>
                                &lt;i&gt; (corsivo)viene utilizzato per scrivere i testi in
                                <i>corsivo</i>
                            </td>
                        </tr>
                        <tr>
                            <td>&lt;b&gt;</td>
                            <td>
                                &lt;b&gt; (bold) si utilizza per mettere in <b>grassetto</b> la
                                parola o il testo in questione.
                            </td>
                        </tr>
                        <tr>
                            <td>&lt;u&gt;</td>
                            <td>&lt;u&gt; (underline) si utilizza per <u>sottolineare</u></td>
                        </tr>
                        <tr>
                            <td>&lt;del&gt;</td>
                            <td>
                                &lt;del&gt; (delet) apparirà una linea sopra alla scritta, come
                                fosse
                                <del>cancellata</del>
                            </td>
                        </tr>
                        <tr>
                            <td>&lt;h1&gt;</td>
                            <td>
                                &lt;h1&gt; è normalmente il titolo principale del file e si ha buona
                                abitudine di averlo uno solamente in tutta la pagina. <br></br>
                                Ha un carattere abbastanza grande per renderlo importante. <br></br>
                                Esistono più estensioni e vanno da H1 ad H6. Più è grande il numero
                                e minore è la grandezza del testo
                            </td>
                        </tr>
                        <tr>
                            <td>&lt;div&gt;</td>
                            <td>
                                Il &lt;div&gt; (divisione) è un contenitore generico ed è un
                                elemento di blocco (block level element).
                            </td>
                        </tr>
                        <tr>
                            <td>&lt;header&gt;</td>
                            <td>
                                &lt;header&gt; (intestazione) viene normalmente utilizzata come
                                sezione primaria del file html.
                            </td>
                        </tr>
                        <tr>
                            <td>&lt;section&gt;</td>
                            <td>
                                &lt;section&gt; (sezione) viene normalmente utilizzata per sezionare
                                in varie parti il file html.
                            </td>
                        </tr>
                        <tr>
                            <td>&lt;main&gt;</td>
                            <td>
                                &lt;main&gt; (principale, importante) viene normalmente utilizzato
                                per una parte importante della pagina.
                            </td>
                        </tr>
                        <tr>
                            <td>&lt;footer&gt;</td>
                            <td>
                                Il &lt;footer&gt; (pie di pagina) viene normalmente utilizzato per
                                la parte finale della pagina. Un'ultima intestazione
                            </td>
                        </tr>
                        <tr>
                            <td>&lt;ul&gt;</td>
                            <td>
                                &lt;ul&gt; sta ad indicare Unorder list, ovvero una lista non
                                ordinata. Verrà visualizzato un elenco puntato.
                            </td>
                        </tr>
                        <tr>
                            <td>&lt;ol&gt;</td>
                            <td>
                                &lt;ol&gt; indica una Order list, ovvero una lista ordinata. Verrà
                                visualizzato un elenco numerato.
                            </td>
                        </tr>
                        <tr>
                            <td>&lt;li&gt;</td>
                            <td>
                                &lt;li&gt; indica List items, ovvero gli elementi della lista. I
                                list items sono sempre e solo figli della lista padre (o ul o ol)
                            </td>
                        </tr>
                        <tr>
                            <td>&lt;table&gt;</td>
                            <td>Con &lt;table&gt; vogliamo creare una tabella</td>
                        </tr>
                        <tr>
                            <td>&lt;tr&gt;</td>
                            <td>&lt;tr&gt; sarà la riga della tabella creata (table row)</td>
                        </tr>
                        <tr>
                            <td>&lt;th&gt; &lt;td&gt;</td>
                            <td>
                                &lt;th&gt; indica i nomi della tabella (table head). Verranno
                                visualizzati in grassetto nelle prime celle in alto.
                                <br></br>&lt;td&gt; sono tutte le celle normali che sono figli di "tr"
                            </td>
                        </tr>
                        <tr>
                            <td>&lt;span&gt;</td>
                            <td>
                                &lt;span&gt; viene utilizzato per separare, distinguere, prendere in
                                considerazione, quella parola o porzione di testo <br></br>
                                Per esempio: SP<span id="AN">AN</span>
                            </td>
                        </tr>
                        <tr>
                            <td>&lt;article&gt;</td>
                            <td>
                                &lt;article&gt; (articolo)viene normalmente utilizzato per scrivere
                                degli articoli
                            </td>
                        </tr>
                        <tr>
                            <td>&lt;q&gt;</td>
                            <td>&lt;q&gt; (quote)viene utilizzato per delle citazioni</td>
                        </tr>
                        <tr>
                            <td>&lt;img src="" alt=""/&gt;</td>
                            <td>
                                Img si utilizza per inserire delle immagini. <br></br>
                                "src" indica search e quindi dobbiamo andare a scrivere il percorso
                                del file dell'immagine interessata <br></br>
                                "alt" dobbiamo inserire una descrizione dell'immagine perchè è un
                                attributo che verrà utilizzato da google per i non vedenti
                            </td>
                        </tr>
                        <tr>
                            <td>&lt;a href=""/&gt;</td>
                            <td>
                                La "A" indica ancor e lo utilizziamo quando dobbiamo fare dei
                                collegamenti interni alla pagina. <br></br>
                                Scriviamo la pagina o il punto della pagina di destinazione
                                all'interno del " href="nomePagina" "
                            </td>
                        </tr>
                        <tr>
                            <td>&lt;link/&gt;</td>
                            <td>
                                Il link lo utilizziamo per i collegamenti esterni. Possiamo inserire
                                degli URL oppure dei fare collegamenti fra pagine. Per esempio lo si
                                utilizza nell'HEAD di un file html per collegarci un file esterno
                                CSS
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <hr></hr>
            <section>
                <p>
                    Un altro tag molto importante è il tag "input". Questo tag permette ad
                    un cliente di interfacciarsi con la pagina web. Quindi è uno dei modi
                    più utilizzati per raccogliere informazione del cliente, farlo
                    registrare, inserire i dati personali, inviare file ecc.
                </p>
                <p>La struttura è la seguente:</p>
                <p>&lt;input type=""&gt;</p>
                <p>
                    Esistono tanti "type" per l'input e ogniuno ha funzioni differenti
                    nell'utilizzo. <br></br>
                    Vediamone alcuni:
                </p>
                <table class="tabella">
                    <caption></caption>
                    <thead>
                        <tr>
                            <th scope="row">Type</th>
                            <th scope="row">Descrizione</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>button</td>
                            <td>E' il classico bottone che l'utente può cliccare per fare qualcosa. Come valore al "value" possiamo inserire la scritta che apparirà sopra al bottone (value="Clicca qui")</td>
                        </tr>
                        <tr>
                            <td>checkbox</td>
                            <td>E’ il flag delle pagine.  E’ un valore di tipo boolean, quindi o accetta o true o false (selezionato o deselezionato) Gli si può attribuire uno stato di default tramite il checked (verrà visualizzato subito con la spunta blu) o nulla.</td>
                        </tr>
                        <tr>
                            <td>color</td>
                            <td>Color serve per far selezionare un colore al cliente. Appare come un bottone con una barra colorata (dove il colore lo scegliamo noi tramite il value="red") e se cliccato, si apre una tendina con la possibilità di scegliere qualisasi colore.
                            </td>
                        </tr>
                        <tr>
                            <td>date</td>
                            <td>Il cliente può inserire una data (gg/mm/aaaa). Come value possiamo inserire la data di partenza che vogliamo mostrare. Se aggiungiamo max mostriamo fino a quanto è possibile andare a ritroso, e max fino a quanto è possibile andare avanti. Le date vanno sempre inserite yyyy-mm-aa</td>
                        </tr>
                        <tr>
                            <td>date</td>
                            <td>Possiamo far inserire al cliente una data (gg/mm/aaaa). Come value inseriamo la data di partenza che vogliamo mostrare. Con il valore min possiamo inserire la prima data di partenza, e il max fino a quanto possiamo andare avanti. Le date vanno sempre inserite yyyy-mm-aa</td>
                        </tr>
                        <tr>
                            <td>datetime-local</td>
                            <td>E' la stessa cosa del date, ma con la possibilità di inserire l'orario</td>
                        </tr>
                        <tr>
                            <td>e-mail</td>
                            <td>questo type è molto utile perchè riconosce autonomamente la validità dell'email inserita dal cliente. Non dobbiamo farlo noi manualmente tramite linguaggi di programmazione, ma autonomamente riesce ad accettare la validità dell'email (come per esempio se è inserita la @ o meno). Se aggiungiamo il valore "require", diventa un campo obbligatorio da compilare, impedendo di proseguire se l'email non è stata inserita. Possiamo anche aggiungere solamente le e-mail che vogliamo accettare con pattern ("pattern="+@google\.com")</td>
                        </tr>
                        <tr>
                            <td>file</td>
                            <td>E' il bottone con scritto "scegli file" e si apre la cartella dove cercare i file desiderati. tramite " accept="" " possiamo scegliere i tipi di file che l'utente può selezionare e/o inviare</td>
                        </tr>
                        <tr>
                            <td>hidden</td>
                            <td>Serve per "controllare" il cliente all'interno del nostro sito. Riusciamo a capire i movimeti che fa, i link cliccati, il tempo percorso all'interno del sito, ecc</td>
                        </tr>
                        <tr>
                            <td>number</td>
                            <td>Serve solamente ad inserire i numeri.</td>
                        </tr>
                        <tr>password</tr>
                        <tr>Si presenta come il text, ma quando scriviamo, vengono oscurati tutti i caratteri per motivi di sicurezza</tr>
                        <tr>
                            <td>radio</td>
                            <td>Il cliente deve obbligatoriamente scegliere un opzione. Non si riesce a deselezionare. Si può cambiare la selezione fatta, ma almeno una cosa deve essere selezionata. </td>
                        </tr>
                        <tr>
                            <td>range</td>
                            <td>Viene visualizzata una barra colorata dove possiamo scegliere un minimo e un massimo con il mouse.</td>
                        </tr>
                        <tr>
                            <td>submit</td>
                            <td>E il bottone con scritto "Invia". Normalmente si inserisce alla fine di ogni form (tag usato per tutto quello che riguarda la compilazione di qualcosa e l'inserimento di dati) ed è molto più appropriato di un button con la scritta Invia sopra.</td>
                        </tr>
                        <tr><td>select</td>
                            <td>Crea una barra dove il cliente può scegliere delle opzioni che ti interessano. Queste opzioni si scrivono all'interno di &lt;option value=""&gt;</td></tr>
                        <tr><td>text</td>
                            <td>E' una barra dove il cliente può inserire del testo. Normalemte viene usato per una barra di ricerca. Con "placeholder" possiamo inserire una frase all'interno della barra, che quando viene selezionata, scompare. (placeholder="cerca")</td></tr>
                        <tr></tr>
                        <tr></tr>
                        <tr></tr>
                    </tbody>
                </table>
            </section>
        </body>
    );
}
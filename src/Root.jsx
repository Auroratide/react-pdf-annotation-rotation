import { Document, Page } from 'react-pdf/dist/esm/entry.parcel2'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'

export const Root = () => {
    return (
        <main>
            <h1>React PDF Annotations with Rotated Document</h1>
            <p>When the PDF document is rotated, the annotated links do not align with the actual links. Here, the interactive links are highlighted with red, and in the rotated document, they do not match. In the control document below, they do.</p>
            <p>Notably, the annotation layer has an attribute <code>data-main-rotation</code> which encodes the amount of rotation the document has, but in default use it does not seem to do anything?</p>
            <section>
                <h2>Rotated Document</h2>
                <div class="document">
                    <Document file="sample-rotated.pdf">
                        <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={true} />
                        <Page pageNumber={2} renderTextLayer={false} renderAnnotationLayer={true} />
                    </Document>
                </div>
            </section>
            <section>
                <h2>Normal Document</h2>
                <div class="document">
                    <Document file="sample.pdf">
                        <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={true} />
                        <Page pageNumber={2} renderTextLayer={false} renderAnnotationLayer={true} />
                    </Document>
                </div>
            </section>
            <footer>
                <p>See issue on <a href="https://github.com/Auroratide/react-pdf-annotation-rotation">Github</a></p>
            </footer>
        </main>
    )
}

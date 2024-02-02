'use client'
export default function Footer() {
  return (
    <footer class="footer p-10 bg-neutral text-neutral-content">
      <nav>
        <h6 class="footer-title">Me Contacter</h6>
        <a class="link link-hover" href="mailto:contact.ddcq@erine.email">
          Par email
        </a>
      </nav>
      <nav>
        <h6 class="footer-title">Around the Web</h6>
        <a class="link link-hover" href="http://ca.linkedin.com/in/denis-declercq-bb6b298">
          LinkedIn
        </a>
        <a class="link link-hover" href="http://www.viadeo.com/p/0021epf6mkaedrhk">
          Viadeo
        </a>
      </nav>
      <nav>
        <h6 class="footer-title">CV à télécharger</h6>
        <a class="link link-hover" href="resume/CV - Denis Declercq.docx">
          Word Docx
        </a>
        <a class="link link-hover" href="resume/CV - Denis Declercq - light.docx">
          Light version
        </a>
      </nav>
    </footer>
  )
}

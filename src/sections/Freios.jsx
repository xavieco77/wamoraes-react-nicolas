const produtos = [
  {
    nome: 'Pastilha de Freio',
    imagem: '/img/pastilhafreio.jpg',
    alt: 'Pastilha de Freio',
    descricao: 'Pastilha de freio de alta durabilidade para veículos de passeio. Proporciona frenagem segura e suave, com baixo nível de ruído.',
    preco: 'R$ 89,90'
  },
  {
    nome: 'Disco de Freio',
    imagem: '/img/discofreio.jpg',
    alt: 'Disco de Freio',
    descricao: 'Disco de freio ventilado de alta resistência. Garante frenagem eficiente e dissipação de calor adequada, prolongando a vida útil das pastilhas.',
    preco: 'R$ 145,00'
  },
  {
    nome: 'Lona de Freio',
    imagem: '/img/lonafreio.jpg',
    alt: 'Lona de Freio',
    descricao: 'Lona de freio para tambor, indicada para veículos de passeio e utilitários. Material de alta qualidade para maior durabilidade.',
    preco: 'R$ 65,00'
  },
  {
    nome: 'Fluido de Freio DOT 4',
    imagem: '/img/dot4.jpg',
    alt: 'Fluido de Freio DOT 4',
    descricao: 'Fluido de freio DOT 4 de alta performance. Recomendado para troca a cada dois anos ou 40.000 km. Essencial para o funcionamento correto do sistema.',
    preco: 'R$ 32,00'
  }
];

export default function Freios() {
  return (
    <section id="freios" className="freios-section">
      <h2 className="titulo-secao">Sistema de Freios</h2>

      <p className="desc-categoria">
        A segurança começa nos freios. Confira nossa linha completa de produtos para o sistema de
        frenagem do seu veículo, com qualidade garantida e preços competitivos.
      </p>

      <div className="container-fluid px-0">
        <div className="row g-4">
          {produtos.map((produto) => (
            <div className="col-12 col-sm-6 col-lg-3" key={produto.nome}>
              <article className="card card-produto-bs h-100">
                <div className="card-img-placeholder">
                  <img src={produto.imagem} alt={produto.alt} />
                </div>

                <div className="card-body d-flex flex-column">
                  <h3 className="card-title">{produto.nome}</h3>
                  <p className="card-text">{produto.descricao}</p>
                  <p className="preco-produto-bs mt-auto">{produto.preco}</p>
                  <a href="#contato" className="btn-amarelo text-center">
                    Solicitar
                  </a>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

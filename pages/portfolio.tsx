import Header from '../components/header';
import PortfolioTop from '../components/portfolioTop';
import PortfolioGallery from '../components/portfolioGallery';
import Footer from '../components/footer';

export default function Portfolio() {
    return (
        <div>
            <Header />
            <PortfolioTop />
            <PortfolioGallery />
            <Footer />
        </div>
    )
}
import { FiPlusSquare } from 'react-icons/fi';
import { HeaderProps } from "../../../src/types/types";
import { Container } from './styles';



export function Header({openModal} : HeaderProps) {  
    return (
      <Container>
        <header>
          <img src={'TODO: criar a imagem'} alt="GoRestaurant" />
          <nav>
            <div>
              <button
                type="button"
                onClick={openModal}
              >
                <div className="text">Novo Prato</div>
                <div className="icon">
                  <FiPlusSquare size={24} />
                </div>
              </button>
            </div>
          </nav>
        </header>
      </Container>
    )
  };

export default Header;

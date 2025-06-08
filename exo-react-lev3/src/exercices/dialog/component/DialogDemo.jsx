import { useState } from "react";
import Dialog from "./Dialog";

export default function DialogDemo() {
  const [openModal, setOpenModal] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <div>
      <button onClick={() => setOpenModal(true)}>Ouvrir Modal</button>
      <button onClick={() => setOpenDialog(true)}>
        Ouvrir Dialog non modal
      </button>

      <div>
        <p>
          {Array(150)
            .fill("Ceci est du texte qui reste visible derrière les modals. ")
            .join("")}
        </p>
      </div>

      {/* Modal */}
      <Dialog isOpen={openModal} onClose={() => setOpenModal(false)} modal>
        <div style={{ padding: 24 }}>
          <header>
            <h3>Modal personnalisée</h3>
          </header>
          <main>
            <p>
              Ceci est le contenu de la modal. Le texte principal reste
              derrière.
            </p>
          </main>
          <footer>
            <button onClick={() => setOpenModal(false)}>Fermer</button>
          </footer>
        </div>
      </Dialog>

      {/* Dialog non modal */}
      <Dialog
        isOpen={openDialog}
        onClose={() => setOpenDialog(false)}
        modal={false}
      >
        <div style={{ padding: 24 }}>
          <header>
            <h3>Dialog non modal</h3>
          </header>
          <main>
            <p>
              Ceci est le contenu du dialog non modal. Le texte principal reste
              derrière.
            </p>
          </main>
          <footer>
            <button onClick={() => setOpenDialog(false)}>Fermer</button>
          </footer>
        </div>
      </Dialog>
    </div>
  );
}

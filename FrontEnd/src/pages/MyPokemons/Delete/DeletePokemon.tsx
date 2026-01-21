import { Modal } from "../../../components/Modal";
import { CustomAlert } from "../../../components/Alert";
import { useDeletePokemon } from "../../../hooks/useDeletePokemo";
import { useEffect } from "react";

export interface IDeletePokemonProps {
    open: boolean;
    onClose: () => void;
    id: string;
}

export const DeletePokemon = ({ open, onClose, id }: IDeletePokemonProps) => {
    const {loading, message, setRequest, setMessage, deletePokemon} = useDeletePokemon();
    
    useEffect(() => {
        if (open && id) {
            setRequest(id);
            setTimeout(()=>{
                onClose();
            }, 5000);
        }
    }, [id, open, setRequest]);

    const handleDelete = () => {
        deletePokemon();
        setRequest("");
    };
  return (
    <>
      <Modal
        open={open}
        title="Delete Pokémon"
        onDismiss={onClose}
        onClickSuccess={() => handleDelete()}
      >
        <div>
            Are you sure you want to delete this Pokémon?
        </div>

        <CustomAlert
            open={!!message}
            message={message}
            status={loading ? 200 : 400}
            onClose={() => {setMessage("");}}
        />
        
      </Modal>
    </>
  );
}
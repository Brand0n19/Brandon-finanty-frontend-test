import { Modal } from "../../../components/Modal";
import { TextField } from "@mui/material";
import { useCreatePokemon } from "../../../hooks/useCreatePokemo";
import { CustomAlert } from "../../../components/Alert";

export interface ICreatePokemonProps {
    open: boolean;
    onClose: () => void;
}

export const CreatePokemon = ({ open, onClose }: ICreatePokemonProps) => {
    const {loading, message, setRequest, setMessage, createPokemon} = useCreatePokemon();
    
    const handleFieldChange = (value: string) => {
        if (value === null || value === undefined || value === "") return;

        setRequest({
            name: value
        });
    };
    

  return (
    <>
      <Modal
        open={open}
        title="Create Pokémon"
        onDismiss={onClose}
        onClickSuccess={() =>{createPokemon(); setTimeout(()=> {onClose();}, 5000);}}
      >
        <div>
          <TextField
            label="Pokémon's name"
            variant="outlined"
            fullWidth           
            margin="normal"    
            required           
            name="name"
            onChange={(x) => handleFieldChange(x.target.value)}         
            placeholder="Ej: Pikachu"
            helperText="Text real pokemon name to add it." 
            />
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
import PatternForm from "../../PatternForm/PatternForm";
import { useSelector } from "react-redux";
import editValidation from "../../../utils/validation/editValidation";
import validation from "../../../utils/validation/validation";
import { editFieldsSlice } from "../../../utils/redux/slices/editFieldsSlice";
import { useActions } from "../../Hooks/useActotion";
import { listDataSlice } from "../../../utils/redux/slices/listData";
import { interfaceActionSlice } from "../../../utils/redux/slices/interfaceActionSlice";
import { selectLoginFields } from "../../../utils/redux/selectors";

const EditForm = ({ storage, firstName, lastName, email, index, setOpen }) => {
   const slice = useActions([
      editFieldsSlice.actions,
      listDataSlice.actions,
      interfaceActionSlice.actions,
   ]);

   const loginFieldsSelector = useSelector(selectLoginFields);
   let editFirstName = loginFieldsSelector.username;
   let editLastName = loginFieldsSelector.password;
   let editEmail = loginFieldsSelector.email;
   const cloneStorage = structuredClone(storage);

   const submit = (event) => {
      editFirstName = editValidation(editFirstName, firstName);
      editLastName = editValidation(editLastName, lastName);
      editEmail = editValidation(editEmail, email);
      cloneStorage[index] = firstName;
      cloneStorage[index] = lastName;
      cloneStorage[index] = email;

      if (validation(editFirstName, editLastName, editEmail)) {
         slice[1].edit([cloneStorage[index], index]);
         slice[2].open(true);
         slice[2].edit(false);
      } else {
         slice[2].valid(false);
         event.preventDefault();
      }
   };

   return (
      <>
         <PatternForm
            firstName={firstName}
            lastName={lastName}
            email={email}
            submit={submit}
            index={index}
            setOpen={setOpen}
         />
      </>
   );
};

export default EditForm;

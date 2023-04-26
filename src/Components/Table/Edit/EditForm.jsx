import PatternForm from "../../PatternForm/PatternForm";
import { useSelector } from "react-redux";
import editValidation from "../../../utils/validation/editValidation";
import validation from "../../../utils/validation/validation";
import { editFieldsSlice } from "../../../utils/redux/slices/editFieldsSlice";
import { useActions } from "../../Hooks/useActotion";
import { listCompositionSlice } from "../../../utils/redux/slices/listComposition";
import { interfaceActionSlice } from "../../../utils/redux/slices/interfaceActionSlice";
import { selectInputFields } from "../../../utils/redux/selectors";

const EditForm = ({
   storage,
   setStorage,
   firstName,
   avatar,
   lastName,
   email,
   index,
   setOpen,
}) => {
   const slice = useActions([
      editFieldsSlice.actions,
      listCompositionSlice.actions,
      interfaceActionSlice.actions,
   ]);

   const inputFields = useSelector(selectInputFields);
   let editAlbum = inputFields.email;
   let editAuthor = inputFields.firstName;
   let editDataRelease = inputFields.avatar;
   let editTrack = inputFields.lastName;
   const cloneStorage = structuredClone(storage);

   const submit = (event) => {
      editAuthor = editValidation(editAuthor, firstName);
      editTrack = editValidation(editTrack, lastName);
      editAlbum = editValidation(editAlbum, email);
      editDataRelease = editValidation(editDataRelease, avatar);

      if (
         validation(editAuthor, editTrack, editAlbum, editDataRelease) === true
      ) {
         cloneStorage[index].firstName = editValidation(editAuthor, firstName);
         cloneStorage[index].lastName = editValidation(editTrack, lastName);
         cloneStorage[index].email = editValidation(editAlbum, email);
         cloneStorage[index].avatar = editValidation(editDataRelease, avatar);

         setStorage(cloneStorage);
         slice[0].enterClear();
         slice[1].edit([cloneStorage[index], index]);
         slice[2].openTrue();
         slice[2].editFalse();
      } else {
         slice[2].validFalse();
         event.preventDefault();
      }
   };

   return (
      <>
         <PatternForm
            storage={storage}
            firstName={firstName}
            avatar={avatar}
            lastName={lastName}
            email={email}
            submit={submit}
            index={index}
            setStorage={setStorage}
            setOpen={setOpen}
         />
      </>
   );
};

export default EditForm;

import PatternForm from "../../PatternForm/PatternForm";
import { useSelector } from "react-redux";
import editValidation from "../../../utils/validation/editValidation";
import validation from "../../../utils/validation/validation";
import { inputFieldsSlice } from "../../../utils/redux/slices/inputFieldsSlice";
import { useActions } from "../../Hooks/useActotion";
import { listCompositionSlice } from "../../../utils/redux/slices/listComposition";
import { interfaceActionSlice } from "../../../utils/redux/slices/interfaceActionSlice";
import { selectInputFields } from "../../../utils/redux/selectors";

const EditForm = ({
   storage,
   setStorage,
   author,
   dataRelease,
   track,
   album,
   index,
   setOpen,
}) => {
   const slice = useActions([
      inputFieldsSlice.actions,
      listCompositionSlice.actions,
      interfaceActionSlice.actions,
   ]);

   const inputFields = useSelector(selectInputFields);
   let editAlbum = inputFields.album;
   let editAuthor = inputFields.author;
   let editDataRelease = inputFields.dataRelease;
   let editTrack = inputFields.track;
   const cloneStorage = structuredClone(storage);

   const submit = (event) => {
      editAuthor = editValidation(editAuthor, author);
      editTrack = editValidation(editTrack, track);
      editAlbum = editValidation(editAlbum, album);
      editDataRelease = editValidation(editDataRelease, dataRelease);

      if (
         validation(editAuthor, editTrack, editAlbum, editDataRelease) === true
      ) {
         cloneStorage[index].author = editValidation(editAuthor, author);
         cloneStorage[index].track = editValidation(editTrack, track);
         cloneStorage[index].album = editValidation(editAlbum, album);
         cloneStorage[index].dataRelease = editValidation(
            editDataRelease,
            dataRelease
         );

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
            author={author}
            dataRelease={dataRelease}
            track={track}
            album={album}
            submit={submit}
            index={index}
            setStorage={setStorage}
            setOpen={setOpen}
         />
      </>
   );
};

export default EditForm;

import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { useMemo } from "react";

export function useActions(actions, deps) {
   const dispatch = useDispatch();
   return useMemo(
      (payload) => {
         payload = {};
         if (Array.isArray(actions)) {
            return actions.map((a) => bindActionCreators(a, dispatch, payload));
         }
         return bindActionCreators(actions, dispatch, payload);
      },
      deps ? [dispatch, ...deps] : [dispatch]
   );
}

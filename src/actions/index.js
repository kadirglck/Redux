/*export const selectLibrary = (libraryId) => {
    return {
        type: 'select_library',
        payload: libraryId
    };
};
 */
export default function actions(dispatch) {
    return {
        selectLibrary: (libraryId) => dispatch({type: 'select_library', payload: libraryId}),
    }
}

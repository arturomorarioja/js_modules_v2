const manageError = (error) => {
    console.error(error.name + ' - ' + error.message);
}

/**
 * Turns the yyyyMMdd date it receives into dd/MM/yyyy format
 * @param {*} date 
 * @returns the formatted date
 */
export const formatDate = (date) => {
    try {
        return new Date(Date.UTC(date.substring(0, 4), 
            date.substring(4, 6) - 1, 
            date.substring(6, 8))).toLocaleDateString('da-dk');
    } catch(error) {
        manageError(error);
        return '';
    }
}
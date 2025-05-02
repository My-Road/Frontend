export const formatDate = (creationDate: Date) => {
    const formattedDate = new Date(creationDate);
    const displayDate = `${formattedDate.getFullYear()}-${formattedDate.getMonth() + 1
        }-${formattedDate.getDate()}`;
    return displayDate
}
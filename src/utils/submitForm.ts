export type formData = {
    fromStreetAdress: string,
    fromCity: string,
    fromPostCode: string,
    fromCountry: string,
    toClientName: string,
    toClientEmail: string,
    toStreetAddress: string,
    toCity: string,
    toPostCode: string,
    toCountry: string,
    invoiceDate: string,
    paymentTerm: number,
    projectDescription: string,
    itemList: {
        itemNames: string[],
        itemQuantities: string[],
        itemPrices: string[]
    }
}
export const submitForm = (data: formData, id: string) => {
    const items = data.itemList.itemNames.map((item, index) => {
        const name = data.itemList.itemNames[index]
        const price = Number(data.itemList.itemPrices[index])
        const quantity = Number(data.itemList.itemQuantities[index])
        const total = quantity * price
        return { name, price, quantity, total }
    });
    const total = items.reduce((number, item) => {
        return item.total + number
    }, 0);
    const updatedPaymentDue = new Date(data.invoiceDate.toString());
    updatedPaymentDue.setDate(updatedPaymentDue.getDate() + data.paymentTerm);
    return {
        id: id,
        senderAddress: {
            street: data.fromStreetAdress,
            city: data.fromCity,
            postCode: data.fromPostCode,
            country: data.fromCountry
        },
        clientName: data.toClientName,
        clientEmail: data.toClientEmail,
        clientAddress: {
            street: data.toStreetAddress,
            city: data.toCity,
            postCode: data.toPostCode,
            country: data.toCountry
        },
        createdAt: data.invoiceDate,
        paymentTerms: data.paymentTerm,
        description: data.projectDescription,
        paymentDue: updatedPaymentDue.toString(),
        items: items,
        status: 'pending',
        total: total
    }
}
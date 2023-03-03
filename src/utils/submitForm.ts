type formData = {
    from_street_address: string,
    from_city: string,
    from_post_code: string,
    from_country: string,
    to_client_name: string,
    to_client_email: string,
    to_street_address: string,
    to_city: string,
    to_post_code: string,
    to_country: string,
    invoice_date: string,
    payment_terms: string,
    project_description: string,
}
type itemsList = {
    itemNames: string[],
    itemQuantities: string[],
    itemPrices: string[]
}
export const submitForm = (data: formData, id: string, itemsList: itemsList, action?: 'draft') => {
    const items = itemsList.itemNames.map((item, index) => {
        const name = itemsList.itemNames[index]
        const price = Number(itemsList.itemPrices[index])
        const quantity = Number(itemsList.itemQuantities[index])
        const total = quantity * price
        return { name, price, quantity, total }
    });
    const total = items.reduce((number, item) => {
        return item.total + number
    }, 0);
    const updatedPaymentDue = new Date(data.invoice_date.toString());
    updatedPaymentDue.setDate(updatedPaymentDue.getDate() + Number(data.payment_terms));
    let status = 'pending'
    let createdAt = data.invoice_date
    if (action === 'draft') {
        const date = new Date();
        const currentDay = date.toISOString().split('T')[0]
        status = 'draft'
        createdAt = data.invoice_date || currentDay
    }
    return {
        id: id,
        senderAddress: {
            street: data.from_street_address,
            city: data.from_city,
            postCode: data.from_post_code,
            country: data.from_country
        },
        clientName: data.to_client_name,
        clientEmail: data.to_client_email,
        clientAddress: {
            street: data.to_street_address,
            city: data.to_city,
            postCode: data.to_post_code,
            country: data.to_country
        },
        createdAt: createdAt,
        paymentTerms: +data.payment_terms,
        description: data.project_description,
        paymentDue: updatedPaymentDue.toString(),
        items: items,
        status: status,
        total: total
    }
}
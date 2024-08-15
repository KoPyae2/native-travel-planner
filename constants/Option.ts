export const SelectOptions = [
    {
        title:'Just Me',
        desc:'A sole traveles in exploration',
        icon:'✈️',
        people:'1'
    },
    {
        title:'A Couples',
        desc:'Two traveles in tandem',
        icon:'🥂',
        people:'2'
    },
    {
        title:'Family',
        desc:'A group of fun loving adv',
        icon:'👨‍👩‍👧‍👦',
        people:'3 to 5 Peoples'
    },
    {
        title:'Friends',
        desc:'A bunch of thrill-seekes',
        icon:'⛵',
        people:'5 to 10 Peoples'
    }
]

export const SelectBudgetOptions = [
    {
        id:1,
        title:'Cheap',
        desc:'Stay conscious of costs',
        icon:'💴',
    },
    {
        id:2,
        title:'Moderate',
        desc:'Keep cost on the average side',
        icon:'💰',
    },
    {
        id:3,
        title:'Luxury',
        desc:'Don\'t worry about costs',
        icon:'💸',
    }
]

// export const AI_PROMPT = 'Generate Travel Plan for Location : {location}, for {totalDays} Days and {totalNights} Night for {traveler} with {budget} with flight details, Flight price with booking url, Hotel options list with HotelName, Hotel address, Price, Hotel img url, Geo Coordinates, Rating, Descriptions and Places to vist nearby with placeName, Place detail, Place image url, Geo Coordinate, tickets Pricing, Time to travel each of locatioon for {totalDays} days and {totalNights} night with each day plan with best time to visit in Json '

export const GenerateTravelPlanPrompt = (
    location: string,
    totalDays: number,
    totalNights: number,
    traveler: string,
    budget: string
): string => {
    const prompt = `Generate Travel Plan for Location: ${location}, for ${totalDays} Days and ${totalNights} Night for ${traveler} with ${budget} with flight details,flight name, Flight price with direct booking url, Hotel options list with HotelName, Hotel address, Price, Rating, Descriptions , Time travel each of location for ${totalDays} days and ${totalNights} night with each day plan with best time to visit with description and itinerary array have only day object and each day contain activity array and each of activity data should contain best time to visit with detail with location name and ticket price and time for visit this place in only JSON format`;

    return prompt;
}
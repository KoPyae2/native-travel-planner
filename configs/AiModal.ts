import { GoogleGenerativeAI } from '@google/generative-ai'
const apikey = process.env.EXPO_PUBLIC_GEMINI_API_KEY
const genAI = new GoogleGenerativeAI(apikey as string);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
};

export const chatSession = model.startChat({
    generationConfig,
    // safetySettings: Adjust safety settings
    // See https://ai.google.dev/gemini-api/docs/safety-settings
    history: [
      {
        role: "user",
        parts: [
          {text: "Generate Travel Plan for Location: Inle Lake, Myanmar (Burma), for 3 Days and 2 Night for A Couples with Luxury with flight details,flight name, Flight price with direct booking url, Hotel options list with HotelName, Hotel address, Price, Rating, Descriptions , Time travel each of location for 3 days and 2 night with each day plan with best time to visit with description and itinerary array have only day object and each day contain activity array and each of activity data should contain best time to visit with detail with location name and ticket price and time for visit this place in  only JSON format"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "```json\n{\n  \"flights\": [\n    {\n      \"airline\": \"AirAsia\",\n      \"flightNumber\": \"AK999\",\n      \"departureAirport\": \"Yangon International Airport (RGN)\",\n      \"arrivalAirport\": \"Heho Airport (HEH)\",\n      \"departureDate\": \"2023-12-15\",\n      \"arrivalDate\": \"2023-12-15\",\n      \"price\": \"$150\",\n      \"bookingUrl\": \"https://www.airasia.com\"\n    },\n    {\n      \"airline\": \"Myanmar Airways International\",\n      \"flightNumber\": \"MB123\",\n      \"departureAirport\": \"Yangon International Airport (RGN)\",\n      \"arrivalAirport\": \"Heho Airport (HEH)\",\n      \"departureDate\": \"2023-12-15\",\n      \"arrivalDate\": \"2023-12-15\",\n      \"price\": \"$170\",\n      \"bookingUrl\": \"https://www.flymya.com\"\n    }\n  ],\n  \"hotels\": [\n    {\n      \"hotelName\": \"The Legend Hotel Inle\",\n      \"hotelAddress\": \"Nyaung Shwe, Inle Lake, Myanmar\",\n      \"price\": \"$150/night\",\n      \"rating\": 4.5,\n      \"description\": \"Luxurious hotel with stunning lake views, private balconies, and a rooftop pool.\"\n    },\n    {\n      \"hotelName\": \"Aureum Palace Hotel & Resort Inle\",\n      \"hotelAddress\": \"Nyaung Shwe, Inle Lake, Myanmar\",\n      \"price\": \"$200/night\",\n      \"rating\": 4.8,\n      \"description\": \"Elegant resort with spacious rooms, a spa, multiple dining options, and a private beach.\"\n    },\n    {\n      \"hotelName\": \"Inle Princess Resort\",\n      \"hotelAddress\": \"Nyaung Shwe, Inle Lake, Myanmar\",\n      \"price\": \"$120/night\",\n      \"rating\": 4.2,\n      \"description\": \"Charming resort with traditional Burmese architecture, a serene garden, and a lakefront restaurant.\"\n    }\n  ],\n  \"itinerary\": [\n    {\n      \"day\": \"Day 1\",\n      \"activities\": [\n        {\n          \"bestTimeToVisit\": \"Morning (8:00 AM - 12:00 PM)\",\n          \"detail\": \"Arrive at Heho Airport (HEH) and transfer to your hotel in Nyaung Shwe, the town on the edge of Inle Lake. Check in and relax. After lunch, embark on a traditional Intha boat tour. Experience the unique leg-rowing technique of the Intha fishermen, visit floating villages, and explore the vibrant markets on the water.\",\n          \"locationName\": \"Inle Lake\",\n          \"ticketPrice\": \"Included in boat tour (negotiable)\",\n          \"timeForVisit\": \"4 hours\"\n        },\n        {\n          \"bestTimeToVisit\": \"Evening (5:00 PM - 7:00 PM)\",\n          \"detail\": \"Enjoy a sunset cruise on Inle Lake, witnessing the beautiful hues of the sky reflecting on the water. Have dinner at a lakeside restaurant with local delicacies.\",\n          \"locationName\": \"Inle Lake\",\n          \"ticketPrice\": \"Around $10 - $20 per person\",\n          \"timeForVisit\": \"2 hours\"\n        }\n      ]\n    },\n    {\n      \"day\": \"Day 2\",\n      \"activities\": [\n        {\n          \"bestTimeToVisit\": \"Morning (9:00 AM - 12:00 PM)\",\n          \"detail\": \"Visit the Phaung Daw Oo Pagoda, the most sacred Buddhist temple on Inle Lake. This pagoda houses five Buddha images that are believed to be relics of Gautama Buddha.\",\n          \"locationName\": \"Phaung Daw Oo Pagoda\",\n          \"ticketPrice\": \"Entrance fee: Around $2\",\n          \"timeForVisit\": \"2 hours\"\n        },\n        {\n          \"bestTimeToVisit\": \"Afternoon (1:00 PM - 4:00 PM)\",\n          \"detail\": \"Explore the Inthar weaving villages, where you can witness the traditional handloom weaving techniques and purchase exquisite silk and cotton products.\",\n          \"locationName\": \"Inthar weaving villages\",\n          \"ticketPrice\": \"N/A\",\n          \"timeForVisit\": \"3 hours\"\n        },\n        {\n          \"bestTimeToVisit\": \"Evening (6:00 PM - 8:00 PM)\",\n          \"detail\": \"Enjoy a romantic dinner at a lakeside restaurant, savoring the fresh seafood and local flavors while enjoying the serene lake atmosphere.\",\n          \"locationName\": \"Lakeside restaurant\",\n          \"ticketPrice\": \"Varies depending on the restaurant\",\n          \"timeForVisit\": \"2 hours\"\n        }\n      ]\n    },\n    {\n      \"day\": \"Day 3\",\n      \"activities\": [\n        {\n          \"bestTimeToVisit\": \"Morning (8:00 AM - 11:00 AM)\",\n          \"detail\": \"Visit the Nga Phe Chaung Monastery, a beautiful monastery known for its unique reclining Buddha statue and stunning views of the surrounding landscape.\",\n          \"locationName\": \"Nga Phe Chaung Monastery\",\n          \"ticketPrice\": \"Entrance fee: Around $2\",\n          \"timeForVisit\": \"2 hours\"\n        },\n        {\n          \"bestTimeToVisit\": \"Afternoon (1:00 PM - 3:00 PM)\",\n          \"detail\": \"Experience the Inle Lake market, a bustling market held every five days where local vendors sell their wares, including produce, handicrafts, and souvenirs.\",\n          \"locationName\": \"Inle Lake Market\",\n          \"ticketPrice\": \"N/A\",\n          \"timeForVisit\": \"2 hours\"\n        },\n        {\n          \"bestTimeToVisit\": \"Late Afternoon (4:00 PM - 6:00 PM)\",\n          \"detail\": \"Depart from Heho Airport (HEH) back to your next destination.\",\n          \"locationName\": \"Heho Airport (HEH)\",\n          \"ticketPrice\": \"N/A\",\n          \"timeForVisit\": \"N/A\"\n        }\n      ]\n    }\n  ]\n}\n```"},
        ],
      },
    ],
});


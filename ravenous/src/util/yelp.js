const apiKey = "NZXSMToYN_MuDWvF7Wz3_DfVTZbLZAG-Rh9t07C1Vg7GezIe7BuuGp6sRqFLxyXVVP_uaTdcttPqfxx0WuhwZc_rj8WgbBZuG5UoRUdpgCecirtMA1QAEV10G3omXHYx";

const Yelp = {
    searchYelp(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{
            headers: {
                Authorization: `Bearer ${apiKey}`
            },
        }).then((response) => {
            console.log(response);
            return response.json();
        }).then((jsonResponse) => {
            console.log(jsonResponse);
            if(jsonResponse.businesses) {
                return jsonResponse.businesses.map((business) => {
                    console.log(business);
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    }
                });
            }
        });
    }
};

export default Yelp;
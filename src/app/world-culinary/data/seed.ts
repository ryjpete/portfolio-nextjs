// @ts-nocheck

export const SEED = {
	Africa: {
		accent: "#C97A3D",
		overview:
			"African cuisine spans an extraordinary range of climates and traditions, but common threads run through much of it: hearty grain- or root-based staples (maize, cassava, millet, sorghum, yams) paired with vegetable, meat, or legume stews; heavy use of peanuts, palm oil, and leafy greens; and a strong tradition of communal, hands-on eating. North Africa's Mediterranean and Arab influences, the Horn's Indian Ocean trade ties, and the lasting marks of European colonization all give different parts of the continent a distinct culinary character.",
		groups: {
			"Northern Africa": {
				overview:
					"Northern African cuisine reflects the region's Mediterranean coastline and centuries of Berber, Arab, and Ottoman influence. Couscous, tagines, and flatbreads are everyday staples, built on warming spice blends like ras el hanout, cumin, and coriander alongside olive oil, preserved lemon, and dried fruit — closer in spirit to Middle Eastern and Mediterranean cooking than to the rest of the continent.",
				countries: {
					Algeria: {
						official: ["Couscous"],
						recommended: ["Chakhchoukha", "Mechoui", "Bourek"],
						spices: ["Cumin", "Coriander", "Ras el hanout", "Mint"],
						founded: "1962 (from France)",
						cuisineNote:
							"Algerian cuisine reflects the country's Berber roots and centuries of Arab and Ottoman influence, with French colonial-era touches still visible in bread and pastry culture. Couscous anchors the everyday table, and dishes lean on warming spices, dried fruit, and slow-simmered stews.",
					},
					Egypt: {
						official: ["Koshari"],
						recommended: ["Ful medames", "Molokhia", "Ta'ameya"],
						spices: ["Cumin", "Coriander", "Dill", "Garlic"],
						founded: "1922 (from UK)",
						cuisineNote:
							"Egyptian cuisine is built on humble, ancient staples — fava beans, lentils, bread, and rice — some traceable to the era of the pharaohs. Its position as a crossroads between Africa, the Middle East, and the Mediterranean shows in dishes blending Levantine, Ottoman, and North African influence.",
					},
					Libya: {
						official: ["Bazin"],
						recommended: ["Couscous", "Shakshuka", "Sharba libiya"],
						spices: [
							"Cumin",
							"Coriander",
							"Caraway",
							"Tabil blend",
						],
						founded: "1951 (from Italy/UN)",
						cuisineNote:
							"Libyan cuisine draws on Berber, Arab, and Ottoman roots, with Italian colonial influence adding pasta-adjacent dishes like the barley-based bazin. Simple, hearty grain staples and slow-cooked stews dominate, reflecting the country's largely desert geography and semi-nomadic history.",
					},
					Morocco: {
						official: ["Couscous", "Tagine"],
						recommended: ["Pastilla", "Harira", "Mechoui"],
						spices: [
							"Ras el hanout",
							"Cumin",
							"Saffron",
							"Preserved lemon",
						],
						founded: "1956 (from France)",
						cuisineNote:
							"Moroccan cuisine is one of North Africa's most internationally recognized, known for elaborate spice blends like ras el hanout, slow-cooked tagines, and a rich pastry and tea culture shaped by Berber, Arab, Andalusian, and French influence.",
					},
					Sudan: {
						official: ["Ful medames"],
						recommended: ["Kisra", "Shai tea", "Mullah"],
						spices: ["Cumin", "Coriander", "Cinnamon", "Cardamom"],
						founded: "1956 (from UK/Egypt)",
						cuisineNote:
							"Sudanese cuisine bridges North and East Africa, with fava beans (ful medames), sorghum-based flatbreads, and simple, slow-cooked stews reflecting the country's Nile Valley agricultural tradition and shared culinary history with Egypt.",
					},
					Tunisia: {
						official: ["Couscous"],
						recommended: [
							"Brik",
							"Lablabi",
							"Harissa-based tagine",
						],
						spices: ["Caraway", "Coriander", "Harissa", "Cumin"],
						founded: "1956 (from France)",
						cuisineNote:
							"Tunisian cuisine is known for its heavy use of harissa chili paste and bolder, spicier flavors than its North African neighbors, shaped by Berber, Arab, Ottoman, and French influence along the country's Mediterranean coast.",
					},
					"Western Sahara": {
						official: ["Camel meat tagine"],
						recommended: [
							"Dates with camel milk",
							"Sahrawi tea",
							"Couscous",
						],
						spices: ["Cumin", "Mint", "Cinnamon", "Cloves"],
						cuisineNote:
							"Sahrawi cuisine reflects a nomadic desert herding tradition, centered on camel meat and milk, dates, and mint tea, with relatively few fresh vegetables due to the region's arid Saharan geography.",
					},
				},
			},
			"Eastern Africa": {
				overview:
					"Eastern African cuisine is shaped by the Horn of Africa's ancient grain traditions (teff, sorghum) alongside Indian Ocean trade routes that brought cardamom, cloves, and cinnamon from Arabia and South Asia. Fermented flatbreads like injera and anjero, spiced stews, and rice pilafs are common, with Ethiopian and Somali cooking especially known for complex spice blends like berbere and xawaash.",
				countries: {
					Burundi: {
						official: ["Ubugali with beans"],
						recommended: ["Isombe", "Brochettes", "Ikivuguto"],
						spices: ["Garlic", "Chili", "Curry powder", "Ginger"],
						founded: "1962 (from Belgium)",
            cuisineNote:
              "Burundian cuisine is centered on local agriculture, featuring staples like red kidney beans, plantains, sweet potatoes, cassava, and maize. Meat is a luxury, so meals are predominantly plant-based and savory, highlighted by dishes like ibiharage (bean stew) and ubugali (a dense cassava or maize paste).",
					},
					Comoros: {
						official: ["Langouste à la vanille"],
						recommended: ["Pilao", "Mataba", "Coconut fish curry"],
						spices: ["Vanilla", "Clove", "Cinnamon", "Nutmeg"],
						founded: "1975 (from France)",
            cuisineNote: "Comoros cuisine is a rich mix of African, Arab, and French tastes. It uses fresh seafood, coconut, and local spices like vanilla, cloves, and cinnamon. The most famous local dish is langouste à la vanille (lobster in a smooth vanilla sauce).",
					},
					Djibouti: {
						official: ["Skoudehkaris"],
						recommended: ["Lahoh", "Fah-fah soup", "Sambusas"],
						spices: ["Cardamom", "Cumin", "Cinnamon", "Cloves"],
						founded: "1977 (from France)",
            cuisineNote: "Djiboutian cuisine is a vibrant fusion of Somali, Afar, Yemeni, and French influences, seasoned with warm Middle Eastern spices like cardamom, cumin, and cinnamon. Staple meals feature rice, pasta, and fresh Red Sea fish, often accompanied by the spongy flatbread laxoox.",
					},
					Eritrea: {
						official: ["Tsebhi with injera"],
						recommended: ["Zigni", "Ful", "Shiro"],
						spices: [
							"Berbere blend",
							"Cumin",
							"Fenugreek",
							"Cardamom",
						],
						founded: "1993 (from Ethiopia)",
            cuisineNote: "Eritrean cuisine features spicy meat and lentil stews (tsebhi) served on spongy sourdough flatbread (injera). It blends East African traditions with coastal seafood and Italian pasta influences from its colonial history.",
					},
					Ethiopia: {
						official: ["Doro wat with injera"],
						recommended: ["Kitfo", "Shiro", "Tibs"],
						spices: [
							"Berbere",
							"Cardamom",
							"Fenugreek",
							"Korarima",
						],
            cuisineNote: "Ethiopian cuisine is renowned for its rich, spicy stews (wats) and the use of injera, a sourdough flatbread made from teff flour. The cuisine emphasizes communal eating, with dishes often shared from a central platter. Berbere spice blend is a cornerstone of flavor, alongside niter kibbeh (spiced clarified butter).",
					},
					Kenya: {
						official: ["Ugali with nyama choma"],
						recommended: ["Sukuma wiki", "Pilau", "Mandazi"],
						spices: ["Coriander", "Cumin", "Curry powder", "Chili"],
						founded: "1963 (from UK)",
            cuisineNote: "Kenyan cuisine is a vibrant mix of indigenous traditions and global influences, centered around hearty, farm-fresh staples like cornmeal, rice, and meats. Meals feature bold spices, fresh vegetables, and communal grilling styles that highlight the country's diverse culture.",
					},
					Madagascar: {
						official: ["Romazava"],
						recommended: [
							"Ravitoto",
							"Vary amin'anana",
							"Zebu skewers",
						],
						spices: [
							"Vanilla",
							"Cloves",
							"Ginger",
							"Wild pink pepper",
						],
						founded: "1960 (from France)",
            cuisineNote: "Madagascar cuisine centers around rice (vary), which is eaten at almost every meal, usually piled high and accompanied by a side dish of meat, vegetables, or greens called laoka. Blending Southeast Asian, African, and French flavors, the food relies on fresh ginger, garlic, tomatoes, and fiery chili pastes (sakay) rather than heavy spice blends.",
					},
					Malawi: {
						official: ["Nsima with ndiwo"],
						recommended: [
							"Chambo fish",
							"Mandasi",
							"Nthochi bread",
						],
						spices: ["Paprika", "Garlic", "Curry powder", "Chili"],
						founded: "1964 (from UK)",
            cuisineNote: "Malawian cuisine centers around nsima, a thick, comforting staple porridge made from ground maize. Eaten with the hands, it is almost always paired with savory side dishes called relishes, which feature fresh fish from Lake Malawi, goat, beef, beans, or pumpkin leaves cooked in rich peanut flour.",
					},
					Mauritius: {
						official: ["Dholl puri"],
						recommended: ["Rougaille", "Fish vindaye", "Alouda"],
						spices: ["Curry leaves", "Cumin", "Turmeric", "Ginger"],
						founded: "1968 (from UK)",
            cuisineNote: "Mauritian cuisine is a vibrant melting pot blending Indian, French, Chinese, and African flavors. Staples include aromatic curries made without coconut milk, spicy tomato-based rougaille, and iconic street foods like dholl puri (split-pea flatbreads) and gâteaux piments (chilli bites).",
					},
					Mozambique: {
						official: ["Piri-piri chicken"],
						recommended: ["Matapa", "Xima", "Prawn curry"],
						spices: [
							"Piri-piri",
							"Garlic",
							"Coriander",
							"Bay leaf",
						],
						founded: "1975 (from Portugal)",
            cuisineNote: "Mozambican cuisine is a vibrant fusion of African, Portuguese, and Arab-Indian flavors, defined by fiery peri-peri chili, rich coconut milk, and fresh Indian Ocean seafood.",
					},
					Rwanda: {
						official: ["Ubugali with isombe"],
						recommended: ["Brochettes", "Ikivuguto", "Agatogo"],
						spices: ["Garlic", "Chili", "Curry powder", "Ginger"],
						founded: "1962 (from Belgium)",
            cuisineNote: "Rwandan cuisine features fresh, local, farm-grown ingredients like plantains, sweet potatoes, beans, and cassava. Meals are typically hearty, mild in spice, and centered around staple starches and rich, peanut-based sauces.",
					},
					Seychelles: {
						official: ["Grilled fish with rice"],
						recommended: ["Octopus curry", "Ladob", "Chatini"],
						spices: ["Cinnamon", "Vanilla", "Turmeric", "Chili"],
						founded: "1976 (from UK)",
            cuisineNote: "Seychelles cuisine is a vibrant Creole fusion blending African, French, Chinese, and Indian flavors. It centers on fresh seafood like red snapper and octopus paired with rice. Dishes feature aromatic coconut milk, local spices, and fiery chili sauces.",
					},
					Somalia: {
						official: ["Bariis iskukaris"],
						recommended: ["Sambusa", "Canjeero", "Suqaar"],
						spices: [
							"Cumin",
							"Cardamom",
							"Cinnamon",
							"Xawaash blend",
						],
						founded: "1960 (from Italy/UK)",
            cuisineNote: "Somali cuisine is a vibrant fusion of East African, Arabic, Italian, and Indian flavors, shaped by centuries of trade and nomadic traditions. It features halal meats like goat, beef, lamb, and camel, fragrant spice blends like xawaash, and unique pairings like spiced rice served with fresh bananas",
					},
					Somaliland: {
						official: ["Anjero with suqaar"],
						recommended: [
							"Bariis iskukaris",
							"Malawah",
							"Sabaayad",
						],
						spices: [
							"Cumin",
							"Cardamom",
							"Cinnamon",
							"Xawaash blend",
						],
						founded: "1991 (self-declared)",
            cuisineNote: "Somaliland cuisine is a rich blend of traditional nomadic pastoralist staples and vibrant global influences from the Middle East, Italy, and India. Meals heavily feature flavorful meats like goat, lamb, and camel, paired with aromatic spiced rice, flatbreads, and a banana on the side.",
					},
					"South Sudan": {
						official: ["Kisra with stew"],
						recommended: ["Ful medames", "Asida", "Grilled goat"],
						spices: ["Chili", "Garlic", "Cumin", "Coriander"],
						founded: "2011 (from Sudan)",
            cuisineNote: "South Sudanese cuisine centers on hearty, grain-based staples like sorghum and millet, frequently served as stiff porridges or fermented flatbreads paired with rich peanut, meat, or vegetable stews.",
					},
					Tanzania: {
						official: ["Ugali"],
						recommended: ["Nyama choma", "Pilau", "Zanzibar mix"],
						spices: [
							"Cardamom",
							"Cloves",
							"Cinnamon",
							"Curry powder",
						],
						founded: "1961 (Tanganyika)",
            cuisineNote: "Tanzanian cuisine blends indigenous African traditions with Arab, Indian, and European influences. Spices like cardamom, cloves, and cinnamon shine brightly, especially in coastal regions and Zanzibar."
					},
					Uganda: {
						official: ["Matoke"],
						recommended: [
							"Luwombo",
							"Rolex wrap",
							"Groundnut sauce",
						],
						spices: [
							"Curry powder",
							"Garlic",
							"Chili",
							"Coriander",
						],
						founded: "1962 (from UK)",
            cuisineNote: "Ugandan cuisine centers on hearty starchy staples like matoke (steamed green bananas) and rich groundnut (peanut) sauces, influenced by British, Arab, and Indian traditions.",
					},
					Zambia: {
						official: ["Nshima with ndiwo"],
						recommended: ["Ifisashi", "Village chicken", "Kapenta"],
						spices: ["Paprika", "Garlic", "Chili", "Curry powder"],
						founded: "1964 (from UK)",
            cuisineNote: "Zambian cuisine centers on nshima, a thick maize porridge that serves as the national staple. Eaten by hand, nshima is paired with savory side dishes called relishes.",
					},
					Zimbabwe: {
						official: ["Sadza with relish"],
						recommended: ["Nyama", "Muriwo", "Chimodho"],
						spices: ["Paprika", "Garlic", "Thyme", "Chili"],
						founded: "1980 (from UK)",
            cuisineNote: "Zimbabwean cuisine centers around sadza, a thick, comforting porridge made from white maize meal. It is served with savory meat stews, peanut butter sauces like dovi, and nutritious green vegetable relishes like pumpkin leaves (muboora).",
					},
				},
			},
			"Middle Africa": {
				overview:
					"Central African cuisine centers on the Congo Basin's cassava, plantain, and leafy greens, cooked with palm oil and often peanuts. Freshwater fish and bushmeat are important protein sources in this heavily forested region, and dishes tend to be slow-simmered stews eaten with a starchy dough for scooping.",
				countries: {
					Angola: {
						official: ["Muamba de galinha"],
						recommended: ["Funge", "Calulu", "Moqueca-style fish"],
						spices: [
							"Garlic",
							"Piri-piri chili",
							"Bay leaf",
							"Paprika",
						],
						founded: "1975 (from Portugal)",
            cuisineNote: "Angolan cuisine is a vibrant fusion of indigenous African traditions and Portuguese colonial flavors. It relies heavily on comforting staples like funge (a savory cassava or cornmeal paste), beans, and rice, paired with bold, rich stews flavored with red palm oil, garlic, okra, and gindungo (chili peppers).",
					},
					Cameroon: {
						official: ["Ndolé"],
						recommended: ["Poulet DG", "Achu soup", "Koki"],
						spices: ["Njangsa", "Chili", "Ginger", "Garlic"],
						founded: "1960 (from France/UK)",
            cuisineNote: "Cameroon cuisine is one of the most diverse in Africa, blending indigenous West-Central African traditions with French, German, and British colonial influences. Meals rely heavily on fresh local produce like plantains, cassava, peanuts, and leafy greens, paired with bold, spicy flavors.",
					},
					"Central African Republic": {
						official: ["Gozo with peanut sauce"],
						recommended: ["Ngunza", "Kpwem", "Mbongo fish"],
						spices: ["Chili", "Garlic", "Ginger", "Cayenne"],
						founded: "1960 (from France)",
            cuisineNote: "Central African Republic cuisine centers on hearty starches like cassava, yams, and plantains paired with savory peanut, tomato, or ground melon seed (egusi) sauces. Meals frequently feature freshwater fish like Nile perch, chicken, or goat, often served alongside fufu or gozo (cassava paste).",
					},
					Chad: {
						official: ["Boule with daraba"],
						recommended: [
							"Salanga dried fish",
							"Karkanji drink",
							"Grilled goat",
						],
						spices: ["Chili", "Cumin", "Ginger", "Garlic"],
						founded: "1960 (from France)",
            cuisineNote: "Chadian cuisine blends Arab, Sahelian, and tropical African traditions. Staples include grains like millet and sorghum, fresh fish from Lake Chad, and rich peanut- or okra-based stews. Meals are deeply social, typically shared communally from a large central platter.",
					},
					"Democratic Republic of the Congo": {
						official: ["Moambe chicken"],
						recommended: ["Fufu", "Saka saka", "Liboke fish"],
						spices: ["Chili", "Garlic", "Ginger", "Bay leaf"],
						founded: "1960 (from Belgium)",
            cuisineNote: "Democratic Republic of the Congo cuisine relies on staples like cassava, plantains, rice, and peanuts. Popular dishes feature fresh fish, goat, or chicken paired with flavorful sauces and green leaves like saka-saka. Meals are hearty, savory, and often served with a side of fufu or kwanga.",
					},
					"Equatorial Guinea": {
						official: ["Succotash (peanut & fish stew)"],
						recommended: [
							"Grilled fish with plantains",
							"Malamba",
							"Pepe soup",
						],
						spices: ["Chili", "Garlic", "Ginger", "Bay leaf"],
						founded: "1968 (from Spain)",
            cuisineNote: "Equatorial Guinea cuisine blends traditional Central African flavors with Spanish colonial influences. Staple ingredients include plantains, cassava, peanuts, yams, and fresh seafood, featured in popular dishes like spicy fish pepesup and peanut-based meat stews.",
					},
					Gabon: {
						official: ["Poulet nyembwe"],
						recommended: [
							"Cassava leaf stew",
							"Grilled fish",
							"Plantain dishes",
						],
						spices: ["Chili", "Garlic", "Ginger", "Bay leaf"],
						founded: "1960 (from France)",
            cuisineNote: "Gabonese cuisine blends traditional Central African flavors with heavy French influence. Staple ingredients include cassava, plantains, peanuts, and palm nut pulp, paired with fresh Atlantic seafood or bushmeat.",
					},
					"Republic of the Congo": {
						official: ["Saka-saka"],
						recommended: ["Fufu", "Kwanga", "Ngulu ya tsangu"],
						spices: ["Chili", "Garlic", "Ginger", "Bay leaf"],
						founded: "1960 (from France)",
            cuisineNote: "Republic of the Congo cuisine relies on hearty staples like cassava, plantains, peanuts, and fresh river fish. Meals center on savory stews and rich sauces spiced with hot pili pili.",
					},
					"São Tomé and Príncipe": {
						official: ["Calulu"],
						recommended: [
							"Feijoada santomense",
							"Grilled fish with breadfruit",
							"Palm wine",
						],
						spices: ["Chili", "Garlic", "Bay leaf", "Cinnamon"],
						founded: "1975 (from Portugal)",
            cuisineNote: "São Tomé and Príncipe cuisine relies on fresh fish, tropical fruits, and local spices. Staple ingredients include plantains, beans, corn, and cassava.",
					},
				},
			},
			"Southern Africa": {
				overview:
					"Southern African cuisine blends Indigenous grain and stewing traditions — maize porridge, or 'pap', is the everyday staple — with strong British, Dutch (Afrikaner), and Indian influences left by colonial-era settlement and labor migration, seen in dishes like braai (barbecue), bobotie, and bunny chow.",
				countries: {
					Botswana: {
						official: ["Seswaa"],
						recommended: ["Bogobe", "Morogo", "Vetkoek"],
						spices: ["Black pepper", "Garlic", "Thyme", "Paprika"],
						founded: "1966 (from UK)",
            cuisineNote: "Botswana cuisine is hearty and simple, centered on high-quality beef, local grains like sorghum and maize, and seasonal wild vegetables. Flavors are natural and lightly spiced, letting the rich taste of farm-raised meats and earthy starches take center stage.",
					},
					Eswatini: {
						official: ["Sishwala with sidvudvu"],
						recommended: ["Emahewu", "Incwancwa", "Roasted meat"],
						spices: ["Paprika", "Garlic", "Thyme", "Chili"],
						founded: "1968 (from UK)",
            cuisineNote: "Eswatini cuisine is rooted in subsistence farming, relying heavily on sorghum, maize, and seasonal vegetables like pumpkin leaves. Hearty, thick porridges and fermented milk (emasi) form the foundation of traditional Swazi meals, while meat is typically reserved for special events or social gatherings like a braai (barbecue)."
					},
					Lesotho: {
						official: ["Papa with moroho"],
						recommended: ["Likhobe", "Motoho", "Sour porridge"],
						spices: ["Paprika", "Garlic", "Thyme", "Chili"],
						founded: "1966 (from UK)",
            cuisineNote: "Lesotho cuisine is deeply tied to the mountainous terrain and agricultural roots of the Basotho people. It centers on hearty, comforting staples like papa (stiff maize porridge), moroho (cooked leafy greens), and likhobe (a traditional stew of mixed beans, sorghum, and wheat).",
					},
					Namibia: {
						official: ["Kapana (braai)"],
						recommended: ["Potjiekos", "Biltong", "Oshifima"],
						spices: ["Black pepper", "Paprika", "Garlic", "Thyme"],
						founded: "1990 (from South Africa)",
            cuisineNote: "Namibian cuisine is a hearty mix of indigenous African traditions and colonial European influences, heavily centered on meat. It features game meats like kudu and oryx, roadside grilled kapana, slow-cooked potjiekos stews, and German-inspired baked goods and lagers.",
					},
					"South Africa": {
						official: ["Braai"],
						recommended: ["Bobotie", "Bunny chow", "Biltong"],
						spices: [
							"Coriander",
							"Curry powder",
							"Chili",
							"Garlic",
						],
						founded: "1910 (Union)",
            cuisineNote: `South African cuisine is a vibrant "Rainbow Nation" mix of Indigenous African, Dutch, Malay, French, and Indian flavors.`,
					},
				},
			},
			"Western Africa": {
				overview:
					"West African cuisine is known for bold, spicy one-pot dishes — jollof rice, groundnut (peanut) stews, and fufu with rich soups — built on staples like rice, cassava, and yams. Palm oil, chili, ginger, and dried or smoked fish and meat are common threads running across the region's many distinct national cuisines.",
				countries: {
					Benin: {
						official: ["Amiwo"],
						recommended: ["Wagasi fritters", "Kuli-kuli", "Gari"],
						spices: ["Chili", "Ginger", "Garlic", "Nutmeg"],
						founded: "1960 (from France)",
            cuisineNote: "Beninese cuisine features fresh coastal seafood, rich peanut and tomato sauces, and staple starches like corn paste in the south and yams in the north, all elevated by red palm oil and fiery chili peppers.",
					},
					"Burkina Faso": {
						official: ["Tô with sauce"],
						recommended: [
							"Babenda",
							"Bouilli",
							"Grilled guinea fowl",
						],
						spices: ["Chili", "Ginger", "Garlic", "Cloves"],
						founded: "1960 (from France)",
						cuisineNote: "Burkinabé cuisine is hearty and communal, centered on local grains like sorghum, millet, and maize. Meals typically feature a thick starch base paired with rich, savory vegetable or peanut sauces, often enhanced with *[soumbala]*{Fermented locust beans} and dried fish for deep flavor.",
					},
					"Cabo Verde": {
						official: ["Cachupa"],
						recommended: [
							"Pastel with tuna",
							"Feijoada caboverdiana",
							"Grogue-marinated fish",
						],
						spices: ["Garlic", "Bay leaf", "Cilantro", "Paprika"],
						founded: "1975 (from Portugal)",
						cuisineNote: "Cabo Verde cuisine is a hearty fusion of West African, Portuguese, and maritime influences. It relies heavily on local staples like corn, beans, and fresh seafood, shaped by a history of resilience and island resources.",
					},
					"Côte d'Ivoire": {
						official: ["Attiéké with grilled fish"],
						recommended: ["Kedjenou", "Alloco", "Garba"],
						spices: ["Chili", "Ginger", "Garlic", "Curry powder"],
						founded: "1960 (from France)",
						cuisineNote: "Côte d'Ivoire cuisine is vibrant and rich. It relies heavily on root vegetables like cassava and yams, grains, plantains, peanuts, and fresh fish or chicken. Meals are famous for bold, spicy flavors and hearty, slow-simmered sauces.",
					},
					Gambia: {
						official: ["Domoda"],
						recommended: ["Benachin", "Yassa", "Superkanja"],
						spices: ["Chili", "Ginger", "Garlic", "Bay leaf"],
						founded: "1965 (from UK)",
						cuisineNote: "Gambian cuisine features rich West African flavors built on staples like rice, peanuts, fish, and fresh local vegetables. Meals are often communal, bringing people together around a single large serving bowl.",
					},
					Ghana: {
						official: ["Jollof rice"],
						recommended: [
							"Waakye",
							"Fufu with light soup",
							"Kelewele",
						],
						spices: ["Chili", "Ginger", "Garlic", "Nutmeg"],
						founded: "1957 (from UK)",
						cuisineNote: "Ghanaian cuisine is hearty, flavorful, and centered around bold stews, rich soups, and filling starchy staples like cassava, plantains, yams, and maize. Meals often combine a mild starch base with a spicy, savory meat or fish accompaniment.",
					},
					Guinea: {
						official: ["Riz gras"],
						recommended: ["Poulet yassa", "Fouti", "Soupe kandia"],
						spices: ["Chili", "Ginger", "Garlic", "Black pepper"],
						founded: "1958 (from France)",
						cuisineNote: "Guinean cuisine features rich West African staples like rice, cassava, fonio, and peanuts, combined with savory leaf and peanut sauces. Meals are heavily communal, often eaten by hand from a shared central dish.",
					},
					"Guinea-Bissau": {
						official: ["Jollof rice"],
						recommended: ["Chabéu", "Cachupa", "Grilled fish"],
						spices: ["Chili", "Garlic", "Bay leaf", "Coriander"],
						founded: "1974 (from Portugal)",
						cuisineNote: "Bissau-Guinean cuisine relies heavily on rice along the coast, millet in the interior, fresh seafood, and root vegetables. It blends West African staples like peanuts and palm oil with Portuguese flavors, featuring hearty stews, chili peppers, and local ingredients like sweet potatoes, cassava, and plantains.",
					},
					Liberia: {
						official: ["Cassava leaf soup"],
						recommended: [
							"Palm butter soup",
							"Fufu",
							"Pepper soup",
						],
						spices: ["Chili", "Thyme", "Garlic", "Bay leaf"],
						founded: "1847",
						cuisineNote: "Liberian cuisine is a vibrant West African tradition blended with cooking styles from the American South and Creole culture. Meals center on staples like rice, cassava, plantains, and fresh fish, heavily spiced with hot habanero or Scotch bonnet peppers.",
					},
					Mali: {
						official: ["Riz au gras"],
						recommended: ["Maafe", "Fakoye", "Tô"],
						spices: ["Chili", "Ginger", "Garlic", "Cloves"],
						founded: "1960 (from France)",
						cuisineNote: "Malian cuisine is centered on cereal grains like rice and millet, paired with rich peanut, tomato, or leafy green sauces, and meats like beef, goat, or chicken. Meals emphasize community, traditionally eaten from a shared central bowl using the right hand.",
					},
					Mauritania: {
						official: ["Mechoui camel"],
						recommended: ["Thieboudienne", "Couscous", "Zrig"],
						spices: ["Cumin", "Mint", "Cinnamon", "Cloves"],
						founded: "1960 (from France)",
						cuisineNote: "Mauritanian cuisine blends Arab, Berber, and West African flavors, using staples like rice, fish, and goat or lamb meat. Meals are communal, heavily influenced by nomadic traditions, and famously accompanied by sweet green mint tea.",
					},
					Niger: {
						official: ["Tuwo with miyan"],
						recommended: ["Dambou", "Kilishi", "Fura"],
						spices: ["Chili", "Ginger", "Cloves", "Garlic"],
						founded: "1960 (from France)",
						cuisineNote: "Cuisine in Niger relies on staple grains like millet, sorghum, and rice, paired with vegetable, peanut, or meat sauces. Influenced by West African, Sahelian, and North African traditions, meals frequently feature grilled meats (mutton, goat, camel) and fresh seasonal vegetable salads.",
					},
					Nigeria: {
						official: ["Jollof rice"],
						recommended: ["Egusi soup", "Suya", "Pounded yam"],
						spices: ["Chili", "Ginger", "Garlic", "Curry powder"],
						founded: "1960 (from UK)",
						cuisineNote: "Nigerian cuisine is a vibrant, bold, and spicy food culture defined by rich stews, aromatic rice dishes, and hearty starchy sides known as \"swallow\". It relies heavily on fresh local vegetables, palm oil, chili peppers, and complex spice blends.",
					},
					Senegal: {
						official: ["Thieboudienne"],
						recommended: ["Yassa", "Mafé", "Bissap"],
						spices: ["Garlic", "Ginger", "Chili", "Bay leaf"],
						founded: "1960 (from France)",
						cuisineNote: "Senegalese cuisine is a vibrant West African culinary tradition shaped by coastal fishing, French and North African influences, and Islamic culture. It emphasizes bold flavors from citrus, onions, peanuts, and fermented seafood, usually served as a communal, one-bowl meal.",
					},
					"Sierra Leone": {
						official: ["Cassava leaf stew"],
						recommended: ["Jollof rice", "Groundnut soup", "Fufu"],
						spices: ["Chili", "Thyme", "Garlic", "Ginger"],
						founded: "1961 (from UK)",
						cuisineNote: "Sierra Leonean cuisine relies on rice as its absolute staple, paired with rich, smoky stews, peanuts, and leafy greens. Local food centers on bold, savory flavors created from palm oil, ginger, onions, and chili or peppercorns.",
					},
					Togo: {
						official: ["Fufu with groundnut soup"],
						recommended: ["Akume", "Ayimolou", "Koklo meme"],
						spices: ["Chili", "Ginger", "Garlic", "Curry powder"],
						founded: "1960 (from France)",
						cuisineNote: "Togolese cuisine is a vibrant West African fusion of local traditions with French and German influences. Meals center around starches like corn, maize, and yams, paired with rich, spicy chili sauces, peanut pastes, fresh seafood along the coast, and meats like goat or chicken.",
					},
				},
			},
		},
	},
	Americas: {
		accent: "#3D6B7A",
		overview:
			"The Americas span two continents and thousands of years of Indigenous culinary tradition — corn, beans, squash, chilies, potatoes, and cassava — layered with European colonization, African diasporic cooking (especially strong in the Caribbean and Brazil), and later waves of Asian and Middle Eastern immigration. The result is a hemisphere where fusion is often the rule rather than the exception, from Tex-Mex to Peruvian-Japanese Nikkei cuisine.",
		groups: {
			Caribbean: {
				overview:
					"Caribbean cuisine blends Indigenous Taíno and Arawak foodways with West African cooking brought during slavery, European colonial influences (Spanish, French, British, Dutch), and South Asian flavors introduced by indentured laborers after emancipation. Rice and peas, saltfish, plantains, and fiery Scotch bonnet chili are threads running through many islands' otherwise distinct national cuisines.",
				countries: {
					"Antigua and Barbuda": {
						official: ["Fungee and pepperpot"],
						recommended: ["Saltfish", "Ducana", "Conch fritters"],
						spices: [
							"Thyme",
							"Scotch bonnet chili",
							"Garlic",
							"Bay leaf",
						],
						founded: "1981 (from UK)",
						cuisineNote: "The Antigua and Barbuda cuisine blends African, British, and indigenous culinary traditions. Its iconic national dish pairs fungee with pepperpot, a hearty, spiced vegetable and meat stew. Fresh seafood like Barbudan lobster and salted cod are also staples.",
					},
					Bahamas: {
						official: ["Conch salad"],
						recommended: [
							"Peas and rice",
							"Cracked conch",
							"Guava duff",
						],
						spices: [
							"Thyme",
							"Allspice",
							"Scotch bonnet chili",
							"Bay leaf",
						],
						founded: "1973 (from UK)",
						cuisineNote: "Bahamian cuisine is a vibrant style of island cooking that blends fresh seafood, tropical fruits, and warm spices with heavy influences from African, Southern American, and Caribbean traditions. Meals frequently feature conch, local fish, rice, and pepper seasonings",
					},
					Barbados: {
						official: ["Cou-cou and flying fish"],
						recommended: [
							"Macaroni pie",
							"Pudding and souse",
							"Fish cakes",
						],
						spices: [
							"Thyme",
							"Marjoram",
							"Scotch bonnet chili",
							"Bay leaf",
						],
						founded: "1966 (from UK)",
					},
					"Cayman Islands": {
						official: ["Cayman-style turtle stew"],
						recommended: [
							"Fish rundown",
							"Cassava cake",
							"Conch fritters",
						],
						spices: [
							"Thyme",
							"Scotch bonnet chili",
							"Allspice",
							"Garlic",
						],
						founded: "1670 (ceded to Britain)",
						belongsTo: "United Kingdom",
					},
					"United States Virgin Islands": {
						official: ["Fungi and fish"],
						recommended: [
							"Kallaloo",
							"Johnnycakes",
							"Conch fritters",
						],
						spices: [
							"Thyme",
							"Scotch bonnet chili",
							"Bay leaf",
							"Allspice",
						],
						founded: "1917 (purchased from Denmark)",
						belongsTo: "United States",
					},
					Cuba: {
						official: ["Ropa vieja"],
						recommended: [
							"Moros y cristianos",
							"Cuban sandwich",
							"Lechón asado",
						],
						spices: ["Cumin", "Oregano", "Bay leaf", "Garlic"],
						founded: "1902 (from US)",
					},
					Dominica: {
						official: ["Callaloo"],
						recommended: [
							"Bakes",
							"Sancoche",
							"Provision ground dishes",
						],
						spices: [
							"Thyme",
							"Bay leaf",
							"Scotch bonnet chili",
							"Garlic",
						],
						founded: "1978 (from UK)",
					},
					"Dominican Republic": {
						official: ["La bandera"],
						recommended: ["Mangú", "Sancocho", "Mofongo"],
						spices: ["Oregano", "Cilantro", "Garlic", "Bay leaf"],
						founded: "1844 (from Haiti)",
					},
					Grenada: {
						official: ["Oil down"],
						recommended: [
							"Callaloo soup",
							"Nutmeg ice cream",
							"Roti",
						],
						spices: ["Nutmeg", "Cinnamon", "Clove", "Bay leaf"],
						founded: "1974 (from UK)",
					},
					Haiti: {
						official: ["Griot with pikliz"],
						recommended: [
							"Diri ak djon djon",
							"Soup joumou",
							"Tassot",
						],
						spices: [
							"Thyme",
							"Scotch bonnet chili",
							"Parsley",
							"Garlic",
						],
						founded: "1804 (from France)",
					},
					Jamaica: {
						official: ["Ackee and saltfish"],
						recommended: ["Jerk chicken", "Curry goat", "Patty"],
						spices: [
							"Allspice (pimento)",
							"Scotch bonnet chili",
							"Thyme",
							"Ginger",
						],
						founded: "1962 (from UK)",
					},
					"Puerto Rico": {
						official: ["Mofongo"],
						recommended: [
							"Lechón asado",
							"Arroz con gandules",
							"Alcapurrias",
						],
						spices: [
							"Garlic",
							"Oregano",
							"Cilantro",
							"Sazón (achiote-based)",
						],
						founded: "1898 (ceded to the US)",
						belongsTo: "United States",
					},
					"Saint Kitts and Nevis": {
						official: ["Stewed saltfish with spicy plantains"],
						recommended: ["Goat water", "Conch", "Johnny cakes"],
						spices: [
							"Thyme",
							"Scotch bonnet chili",
							"Bay leaf",
							"Garlic",
						],
						founded: "1983 (from UK)",
					},
					"Saint Lucia": {
						official: ["Green figs and saltfish"],
						recommended: ["Bouyon", "Accra", "Pepper pot"],
						spices: [
							"Thyme",
							"Bay leaf",
							"Scotch bonnet chili",
							"Garlic",
						],
						founded: "1979 (from UK)",
					},
					"Saint Vincent and the Grenadines": {
						official: ["Roasted breadfruit and jackfish"],
						recommended: ["Callaloo soup", "Souse", "Bakes"],
						spices: [
							"Thyme",
							"Scotch bonnet chili",
							"Bay leaf",
							"Garlic",
						],
						founded: "1979 (from UK)",
					},
					"Trinidad and Tobago": {
						official: ["Doubles"],
						recommended: ["Callaloo", "Roti", "Pelau"],
						spices: [
							"Cumin",
							"Coriander",
							"Scotch bonnet chili",
							"Garam masala",
						],
						founded: "1962 (from UK)",
					},
				},
			},
			"Central America": {
				overview:
					"Central American cuisine is rooted in Mesoamerican staples — corn, beans, and squash — dating back to the Maya and other Indigenous civilizations, with Spanish colonization adding rice, pork, and dairy. Corn tortillas and tamales, in countless regional forms, remain the throughline connecting the isthmus's otherwise quite distinct national cuisines.",
				countries: {
					Belize: {
						official: ["Rice and beans with stewed chicken"],
						recommended: ["Garnaches", "Hudut", "Escabeche"],
						spices: [
							"Cilantro",
							"Achiote",
							"Habanero chili",
							"Oregano",
						],
						founded: "1981 (from UK)",
					},
					"Costa Rica": {
						official: ["Gallo pinto"],
						recommended: ["Casado", "Ceviche", "Olla de carne"],
						spices: [
							"Cilantro",
							"Achiote",
							"Oregano",
							"Sweet chili",
						],
						founded: "1821 (from Spain)",
					},
					"El Salvador": {
						official: ["Pupusas"],
						recommended: ["Yuca frita", "Sopa de pata", "Curtido"],
						spices: ["Oregano", "Achiote", "Cumin", "Garlic"],
						founded: "1821 (from Spain)",
					},
					Guatemala: {
						official: ["Pepián"],
						recommended: ["Kak'ik", "Tamales", "Chiles rellenos"],
						spices: ["Achiote", "Cilantro", "Cumin", "Allspice"],
						founded: "1821 (from Spain)",
					},
					Honduras: {
						official: ["Baleadas"],
						recommended: ["Sopa de caracol", "Tapado", "Anafre"],
						spices: ["Cilantro", "Achiote", "Cumin", "Oregano"],
						founded: "1821 (from Spain)",
					},
					Mexico: {
						areas: [
							{
								name: "Oaxaca",
								official: ["Mole negro"],
								recommended: [
									"Tlayudas",
									"Tasajo",
									"Chapulines",
								],
								spices: [
									"Assorted dried chiles",
									"Cinnamon",
									"Cloves",
									"Avocado leaf",
								],
							},
							{
								name: "Yucatán",
								official: ["Cochinita pibil"],
								recommended: [
									"Sopa de lima",
									"Papadzules",
									"Panuchos",
								],
								spices: [
									"Achiote",
									"Habanero",
									"Oregano",
									"Cumin",
								],
							},
							{
								name: "Puebla (Central)",
								official: ["Mole poblano"],
								recommended: [
									"Chiles en nogada",
									"Cemitas",
									"Chalupas",
								],
								spices: [
									"Cinnamon",
									"Assorted dried chiles",
									"Cloves",
									"Anise",
								],
							},
							{
								name: "Northern Mexico",
								official: ["Cabrito"],
								recommended: [
									"Carne asada",
									"Machaca",
									"Flour tortilla dishes",
								],
								spices: [
									"Black pepper",
									"Garlic",
									"Cumin",
									"Chili",
								],
							},
							{
								name: "Veracruz (Gulf Coast)",
								official: ["Huachinango a la Veracruzana"],
								recommended: [
									"Arroz a la tumbada",
									"Tamales veracruzanos",
									"Picadas",
								],
								spices: [
									"Bay leaf",
									"Oregano",
									"Cinnamon",
									"Chili",
								],
							},
						],
						founded: "1821 (from Spain)",
					},
					Nicaragua: {
						official: ["Vigorón"],
						recommended: ["Nacatamal", "Indio viejo", "Quesillo"],
						spices: ["Achiote", "Cilantro", "Oregano", "Cumin"],
						founded: "1821 (from Spain)",
					},
					Panama: {
						official: ["Sancocho"],
						recommended: [
							"Ropa vieja panameña",
							"Ceviche",
							"Patacones",
						],
						spices: ["Cilantro", "Achiote", "Oregano", "Garlic"],
						founded: "1903 (from Colombia)",
					},
				},
			},
			"North America": {
				overview:
					"In this narrower geoscheme sense — just Canada, the United States, and their nearby territories — North American cuisine is shaped by Indigenous foodways, successive waves of European and later global immigration, and vast regional variation, from Quebecois French tradition to the American South's West African-influenced cooking.",
				countries: {
					Bermuda: {
						official: ["Bermuda fish chowder"],
						recommended: [
							"Codfish and potatoes",
							"Hoppin' John",
							"Cassava pie",
						],
						spices: [
							"Sherry pepper sauce",
							"Black rum",
							"Allspice",
							"Thyme",
						],
						founded: "1609 (settled)",
						belongsTo: "United Kingdom",
					},
					Canada: {
						official: ["Poutine"],
						recommended: [
							"Tourtière",
							"Butter tart",
							"Montreal smoked meat",
						],
						spices: ["Dill", "Thyme", "Bay leaf", "Black pepper"],
						founded: "1867 (Confederation)",
					},
					Greenland: {
						official: ["Suaasat"],
						recommended: [
							"Dried fish",
							"Mattak (whale skin)",
							"Reindeer stew",
						],
						spices: ["Salt", "Onion", "Bay leaf", "Allspice"],
						founded: "1979 (home rule)",
						belongsTo: "Denmark",
					},
					"United States": {
						areas: [
							{
								name: "The South",
								official: ["Fried chicken with biscuits"],
								recommended: [
									"BBQ ribs",
									"Collard greens",
									"Cornbread",
								],
								spices: [
									"Cayenne",
									"Paprika",
									"Black pepper",
									"Thyme",
								],
							},
							{
								name: "Tex-Mex / Southwest",
								official: ["Tex-Mex enchiladas"],
								recommended: [
									"Breakfast tacos",
									"Chili con carne",
									"Fajitas",
								],
								spices: [
									"Chili powder",
									"Cumin",
									"Paprika",
									"Garlic",
								],
							},
							{
								name: "Louisiana (Creole/Cajun)",
								official: ["Gumbo"],
								recommended: [
									"Jambalaya",
									"Étouffée",
									"Beignets",
								],
								spices: [
									"Cayenne",
									"Paprika",
									"Thyme",
									"Filé powder",
								],
							},
							{
								name: "New England",
								official: ["Clam chowder"],
								recommended: [
									"Lobster roll",
									"Baked beans",
									"Johnnycakes",
								],
								spices: [
									"Black pepper",
									"Thyme",
									"Bay leaf",
									"Allspice",
								],
							},
							{
								name: "Midwest",
								official: ["Hotdish (casserole)"],
								recommended: [
									"Deep-dish pizza",
									"Cheese curds",
									"Runza",
								],
								spices: [
									"Black pepper",
									"Paprika",
									"Garlic powder",
									"Dill",
								],
							},
						],
						founded: "1776",
					},
				},
			},
			"South America": {
				overview:
					"South American cuisine draws on deep Indigenous roots — potatoes and quinoa in the Andes, cassava across the Amazon and Brazil — combined with Spanish and Portuguese colonization, African culinary influence from the slave trade (especially strong in Brazil), and later Italian, German, and Japanese immigration that left a lasting mark on countries like Argentina, Chile, and Peru.",
				countries: {
					Argentina: {
						official: ["Asado"],
						recommended: [
							"Empanadas",
							"Milanesa",
							"Chimichurri-topped steak",
						],
						spices: [
							"Oregano",
							"Parsley",
							"Bay leaf",
							"Ají molido",
						],
						founded: "1816 (from Spain)",
					},
					Bolivia: {
						official: ["Salteñas"],
						recommended: ["Pique macho", "Silpancho", "Anticuchos"],
						spices: [
							"Cumin",
							"Oregano",
							"Aji amarillo chili",
							"Huacatay",
						],
						founded: "1825 (from Spain)",
					},
					"Falkland Islands": {
						official: ["Falklands lamb"],
						recommended: [
							"Diddle dee jam desserts",
							"Smoked mullet",
							"Squid dishes",
						],
						spices: ["Rosemary", "Black pepper", "Garlic", "Thyme"],
						founded: "1833 (British rule established)",
						belongsTo: "United Kingdom",
					},
					"French Guiana": {
						official: ["Bouillon d'awara"],
						recommended: [
							"Colombo (curry stew)",
							"Cassava couac",
							"Blaff fish",
						],
						spices: [
							"Awara pulp",
							"Cayenne pepper",
							"Garlic",
							"Thyme",
						],
						founded: "1667 (French colony established)",
						belongsTo: "France",
					},
					Brazil: {
						areas: [
							{
								name: "Bahia (Northeast)",
								official: ["Moqueca baiana"],
								recommended: [
									"Acarajé",
									"Vatapá",
									"Bobó de camarão",
								],
								spices: [
									"Chili malagueta",
									"Ginger",
									"Cilantro",
									"Black pepper",
								],
							},
							{
								name: "Minas Gerais",
								official: ["Feijão tropeiro"],
								recommended: [
									"Pão de queijo",
									"Frango com quiabo",
									"Tutu de feijão",
								],
								spices: [
									"Garlic",
									"Bay leaf",
									"Black pepper",
									"Parsley",
								],
							},
							{
								name: "Rio de Janeiro",
								official: ["Feijoada carioca"],
								recommended: [
									"Bolinho de bacalhau",
									"Picadinho",
									"Biscoito Globo",
								],
								spices: [
									"Bay leaf",
									"Garlic",
									"Black pepper",
									"Cumin",
								],
							},
							{
								name: "Rio Grande do Sul (South)",
								official: ["Churrasco gaúcho"],
								recommended: [
									"Arroz de carreteiro",
									"Galeto",
									"Cuca (pastry)",
								],
								spices: [
									"Garlic",
									"Black pepper",
									"Bay leaf",
									"Parsley",
								],
							},
							{
								name: "Amazon (North)",
								official: ["Tacacá"],
								recommended: [
									"Pato no tucupi",
									"Maniçoba",
									"Açaí bowls",
								],
								spices: [
									"Jambu",
									"Chili",
									"Garlic",
									"Cilantro",
								],
							},
						],
						founded: "1822 (from Portugal)",
					},
					Chile: {
						official: ["Curanto"],
						recommended: [
							"Pastel de choclo",
							"Empanadas de pino",
							"Cazuela",
						],
						spices: [
							"Cumin",
							"Oregano",
							"Merken (smoked chili)",
							"Cilantro",
						],
						founded: "1818 (from Spain)",
					},
					Colombia: {
						official: ["Bandeja paisa"],
						recommended: ["Ajiaco", "Arepas", "Sancocho"],
						spices: ["Cumin", "Cilantro", "Achiote", "Bay leaf"],
						founded: "1810 (from Spain)",
					},
					Ecuador: {
						official: ["Ceviche ecuatoriano"],
						recommended: [
							"Locro de papa",
							"Encebollado",
							"Llapingacho",
						],
						spices: ["Cumin", "Achiote", "Cilantro", "Aji chili"],
						founded: "1830 (from Gran Colombia)",
					},
					Guyana: {
						official: ["Pepperpot"],
						recommended: [
							"Cook-up rice",
							"Roti and curry",
							"Metemgee",
						],
						spices: [
							"Cumin",
							"Coriander",
							"Garam masala",
							"Wiri wiri chili",
						],
						founded: "1966 (from UK)",
					},
					Paraguay: {
						official: ["Sopa paraguaya"],
						recommended: ["Chipa", "Bori bori", "Asado paraguayo"],
						spices: ["Parsley", "Oregano", "Bay leaf", "Garlic"],
						founded: "1811 (from Spain)",
					},
					Peru: {
						official: ["Ceviche"],
						recommended: [
							"Lomo saltado",
							"Ají de gallina",
							"Anticuchos",
						],
						spices: [
							"Aji amarillo chili",
							"Cumin",
							"Huacatay",
							"Cilantro",
						],
						founded: "1821 (from Spain)",
					},
					Suriname: {
						official: ["Pom"],
						recommended: ["Roti", "Moksi meti", "Bakabana"],
						spices: [
							"Cumin",
							"Coriander",
							"Garam masala",
							"Madame jeanette chili",
						],
						founded: "1975 (from Netherlands)",
					},
					Uruguay: {
						official: ["Asado"],
						recommended: ["Chivito", "Milanesa", "Chajá"],
						spices: [
							"Oregano",
							"Parsley",
							"Bay leaf",
							"Chili flakes",
						],
						founded: "1828 (from Brazil)",
					},
					Venezuela: {
						official: ["Pabellón criollo"],
						recommended: ["Arepas", "Hallacas", "Cachapas"],
						spices: ["Cilantro", "Cumin", "Achiote", "Garlic"],
						founded: "1811 (from Spain)",
					},
				},
			},
		},
	},
	Asia: {
		accent: "#9C4B3F",
		overview:
			"Asia is the largest and most populous continent, and its cuisines reflect an equally vast range of climates, religions, and trade histories. Rice, wheat, and noodles form the backbone of many diets, while spice trade routes — the Silk Road, and the maritime Spice Routes through Southeast Asia — shaped flavors from the Mediterranean to Japan. Religious traditions (halal, kosher, Buddhist and Hindu vegetarianism) and regional geography divide the continent into culinary worlds that often share as much with neighboring continents as with each other.",
		groups: {
			"Central Asia": {
				overview:
					"Central Asian cuisine grew up along the Silk Road, shaped by nomadic pastoral traditions — mutton, horse meat, and dairy — combined with Persian- and Turkic-influenced rice pilafs (plov) and dumplings. Bread and tea hold deep cultural significance across the region, and hospitality customs around shared meals remain central to Central Asian identity.",
				countries: {
					Kazakhstan: {
						official: ["Beshbarmak"],
						recommended: ["Kazy", "Baursak", "Kumis"],
						spices: ["Cumin", "Black pepper", "Dill", "Bay leaf"],
						founded: "1991 (from USSR)",
					},
					Kyrgyzstan: {
						official: ["Beshbarmak"],
						recommended: ["Lagman", "Manti", "Kumis"],
						spices: ["Cumin", "Dill", "Coriander", "Black pepper"],
						founded: "1991 (from USSR)",
					},
					Tajikistan: {
						official: ["Osh"],
						recommended: ["Qurutob", "Manti", "Laghman"],
						spices: ["Cumin", "Dill", "Coriander", "Black pepper"],
						founded: "1991 (from USSR)",
					},
					Turkmenistan: {
						official: ["Plov"],
						recommended: ["Chorba", "Manty", "Gutap"],
						spices: ["Cumin", "Dill", "Coriander", "Black pepper"],
						founded: "1991 (from USSR)",
					},
					Uzbekistan: {
						official: ["Plov (Osh)"],
						recommended: ["Lagman", "Manti", "Samsa"],
						spices: ["Cumin", "Coriander", "Dill", "Barberries"],
						founded: "1991 (from USSR)",
					},
				},
			},
			"Eastern Asia": {
				overview:
					"East Asian cuisine is built on rice or wheat noodles, soy-based seasoning, and a refined balance of umami, developed over millennia of distinct but interconnected traditions across China, Japan, Korea, Mongolia, and Taiwan. Techniques like fermentation (soy sauce, miso, kimchi), wok cooking, and delicate raw preparations (sashimi) spread and evolved differently across the region.",
				countries: {
					China: {
						areas: [
							{
								name: "Sichuan",
								official: ["Mapo tofu"],
								recommended: [
									"Kung pao chicken",
									"Dan dan noodles",
									"Hot pot",
								],
								spices: [
									"Sichuan pepper",
									"Dried chili",
									"Star anise",
									"Ginger",
								],
							},
							{
								name: "Cantonese (Guangdong)",
								official: ["Dim sum"],
								recommended: [
									"Char siu",
									"Wonton noodle soup",
									"Steamed fish",
								],
								spices: [
									"Ginger",
									"Scallion",
									"White pepper",
									"Five-spice",
								],
							},
							{
								name: "Beijing / Northern",
								official: ["Peking duck"],
								recommended: [
									"Zhajiangmian",
									"Jiaozi dumplings",
									"Hot and sour soup",
								],
								spices: [
									"Star anise",
									"Cinnamon",
									"Sichuan pepper",
									"Garlic",
								],
							},
							{
								name: "Shanghai / Jiangsu",
								official: ["Xiaolongbao"],
								recommended: [
									"Sweet and sour mandarin fish",
									"Hairy crab",
									"Red-braised pork belly",
								],
								spices: [
									"Ginger",
									"Star anise",
									"Scallion",
									"White pepper",
								],
							},
							{
								name: "Hunan",
								official: ["Chairman Mao's red-braised pork"],
								recommended: [
									"Steamed fish head with chili",
									"Dry-fried green beans",
									"Smoked bacon stir-fry",
								],
								spices: [
									"Dried chili",
									"Garlic",
									"Ginger",
									"Sichuan pepper",
								],
							},
						],
						founded: "1949 (PRC founded)",
					},
					Japan: {
						official: ["Sushi"],
						recommended: ["Ramen", "Tempura", "Okonomiyaki"],
						spices: ["Shiso", "Wasabi", "Sansho pepper", "Ginger"],
					},
					"Hong Kong": {
						official: ["Wonton noodle soup"],
						recommended: ["Dim sum", "Char siu", "Egg tarts"],
						spices: [
							"Ginger",
							"Scallion",
							"Five-spice",
							"White pepper",
						],
						founded: "1997 (returned to China)",
						belongsTo: "China",
					},
					Macau: {
						official: ["Galinha à Africana (African chicken)"],
						recommended: [
							"Pork chop bun",
							"Portuguese egg tart",
							"Minchi",
						],
						spices: ["Turmeric", "Coconut", "Piri-piri", "Garlic"],
						founded: "1999 (returned to China)",
						belongsTo: "China",
					},
					Mongolia: {
						official: ["Buuz"],
						recommended: ["Khorkhog", "Tsuivan", "Airag"],
						spices: [
							"Black pepper",
							"Garlic",
							"Caraway",
							"Bay leaf",
						],
						founded: "1921 (from China)",
					},
					"North Korea": {
						official: ["Naengmyeon"],
						recommended: [
							"Kimchi",
							"Sinseollo",
							"Pyongyang-style dumplings",
						],
						spices: ["Garlic", "Ginger", "Sesame", "Chili powder"],
						founded: "1948",
					},
					"South Korea": {
						official: ["Kimchi jjigae"],
						recommended: ["Bibimbap", "Korean BBQ", "Tteokbokki"],
						spices: ["Garlic", "Ginger", "Gochugaru", "Sesame"],
						founded: "1948",
					},
					Taiwan: {
						official: ["Beef noodle soup"],
						recommended: [
							"Oyster omelet",
							"Stinky tofu",
							"Bubble tea",
						],
						spices: [
							"Five-spice",
							"White pepper",
							"Garlic",
							"Basil",
						],
					},
				},
			},
			"South-Eastern Asia": {
				overview:
					"Southeast Asian cuisine sits at a historic crossroads of Indian, Chinese, and later European (particularly French and Portuguese) influence, layered onto Indigenous traditions built around rice, fish sauce, and fresh herbs. The region is known for balancing sour, sweet, salty, and spicy flavors within a single dish, and for its reliance on aromatics like lemongrass, galangal, and kaffir lime.",
				countries: {
					Brunei: {
						official: ["Ambuyat"],
						recommended: ["Nasi katok", "Satay", "Kelupis"],
						spices: ["Lemongrass", "Galangal", "Turmeric", "Chili"],
						founded: "1984 (from UK)",
					},
					Cambodia: {
						official: ["Amok"],
						recommended: [
							"Nom banh chok",
							"Lok lak",
							"Bai sach chrouk",
						],
						spices: [
							"Lemongrass",
							"Galangal",
							"Kaffir lime leaf",
							"Turmeric",
						],
						founded: "1953 (from France)",
					},
					Indonesia: {
						official: ["Nasi goreng"],
						recommended: ["Rendang", "Satay", "Gado-gado"],
						spices: [
							"Galangal",
							"Candlenut",
							"Lemongrass",
							"Turmeric",
						],
						founded: "1945 (from Netherlands)",
					},
					Laos: {
						official: ["Larb"],
						recommended: ["Tam mak hoong", "Khao niew", "Sai oua"],
						spices: ["Lemongrass", "Galangal", "Dill", "Chili"],
						founded: "1953 (from France)",
					},
					Malaysia: {
						official: ["Nasi lemak"],
						recommended: ["Laksa", "Char kway teow", "Satay"],
						spices: ["Lemongrass", "Galangal", "Turmeric", "Chili"],
						founded: "1957 (from UK)",
					},
					Myanmar: {
						official: ["Mohinga"],
						recommended: [
							"Lahpet thoke",
							"Shan noodles",
							"Ohn no khao swe",
						],
						spices: ["Turmeric", "Ginger", "Garlic", "Tamarind"],
						founded: "1948 (from UK)",
					},
					Philippines: {
						official: ["Adobo"],
						recommended: ["Sinigang", "Lechon", "Pancit"],
						spices: [
							"Garlic",
							"Bay leaf",
							"Black pepper",
							"Annatto",
						],
						founded: "1946 (from US)",
					},
					Singapore: {
						official: ["Hainanese chicken rice"],
						recommended: ["Laksa", "Char kway teow", "Chili crab"],
						spices: [
							"Lemongrass",
							"Galangal",
							"Turmeric",
							"Star anise",
						],
						founded: "1965 (from Malaysia)",
					},
					Thailand: {
						official: ["Pad thai"],
						recommended: [
							"Tom yum goong",
							"Green curry",
							"Som tam",
						],
						spices: [
							"Lemongrass",
							"Galangal",
							"Kaffir lime leaf",
							"Thai basil",
						],
					},
					"Timor-Leste": {
						official: ["Ikan pepes"],
						recommended: ["Batar da'an", "Ai-manas sauce", "Tukir"],
						spices: ["Chili", "Tamarind", "Ginger", "Lemongrass"],
						founded: "2002 (from Indonesia)",
					},
					Vietnam: {
						official: ["Phở"],
						recommended: ["Bánh mì", "Bún chả", "Gỏi cuốn"],
						spices: [
							"Lemongrass",
							"Mint",
							"Cilantro",
							"Star anise",
						],
						founded: "1945 (declared)",
					},
				},
			},
			"Southern Asia": {
				overview:
					"South Asian cuisine centers on rice and wheat breads, lentils, and elaborate spice blends developed over thousands of years, shaped by Vedic, Persian, Mughal, and colonial-era influence. Religious dietary traditions — Hindu vegetarianism, Islamic halal practices, Jain restrictions — have deeply shaped regional cooking, and layered, toasted spice combinations (masalas) form a defining thread across the subcontinent.",
				countries: {
					Afghanistan: {
						official: ["Kabuli palaw"],
						recommended: ["Mantu", "Bolani", "Ashak"],
						spices: [
							"Cumin",
							"Coriander",
							"Cardamom",
							"Dried mint",
						],
						founded: "1919 (from UK)",
					},
					Bangladesh: {
						official: ["Ilish with rice"],
						recommended: [
							"Panta bhat",
							"Biryani",
							"Bhuna khichuri",
						],
						spices: [
							"Cumin",
							"Coriander",
							"Turmeric",
							"Mustard seed",
						],
						founded: "1971 (from Pakistan)",
					},
					Bhutan: {
						official: ["Ema datshi"],
						recommended: ["Momos", "Phaksha paa", "Red rice"],
						spices: [
							"Chili",
							"Timur (Sichuan pepper)",
							"Coriander",
							"Ginger",
						],
					},
					India: {
						areas: [
							{
								name: "Punjab / North",
								official: ["Butter chicken"],
								recommended: [
									"Sarson da saag with makki roti",
									"Chole bhature",
									"Amritsari kulcha",
								],
								spices: [
									"Garam masala",
									"Cumin",
									"Coriander",
									"Fenugreek",
								],
							},
							{
								name: "Tamil Nadu / Kerala (South)",
								official: ["Dosa with sambar"],
								recommended: [
									"Idli",
									"Kerala fish curry",
									"Appam",
								],
								spices: [
									"Curry leaves",
									"Mustard seed",
									"Tamarind",
									"Black pepper",
								],
							},
							{
								name: "Gujarat (West)",
								official: ["Dhokla"],
								recommended: ["Thepla", "Undhiyu", "Khandvi"],
								spices: [
									"Turmeric",
									"Mustard seed",
									"Asafoetida",
									"Cumin",
								],
							},
							{
								name: "Bengal (East)",
								official: ["Macher jhol"],
								recommended: [
									"Shorshe ilish",
									"Rasgulla",
									"Kosha mangsho",
								],
								spices: [
									"Panch phoron",
									"Mustard seed",
									"Turmeric",
									"Cumin",
								],
							},
							{
								name: "Rajasthan",
								official: ["Dal baati churma"],
								recommended: [
									"Laal maas",
									"Gatte ki sabzi",
									"Ker sangri",
								],
								spices: [
									"Red chili",
									"Asafoetida",
									"Cumin",
									"Fenugreek",
								],
							},
						],
						founded: "1947 (from UK)",
					},
					Iran: {
						official: ["Chelow kabab"],
						recommended: ["Ghormeh sabzi", "Tahdig", "Fesenjan"],
						spices: [
							"Saffron",
							"Turmeric",
							"Dried lime",
							"Cinnamon",
						],
					},
					Maldives: {
						official: ["Garudhiya"],
						recommended: ["Mas huni", "Fihunu mas", "Bondibaigen"],
						spices: ["Curry leaves", "Chili", "Cumin", "Coriander"],
						founded: "1965 (from UK)",
					},
					Nepal: {
						official: ["Dal bhat"],
						recommended: ["Momos", "Gundruk", "Sel roti"],
						spices: ["Cumin", "Turmeric", "Timur", "Fenugreek"],
					},
					Pakistan: {
						official: ["Biryani"],
						recommended: ["Nihari", "Karahi", "Seekh kebab"],
						spices: ["Cumin", "Coriander", "Garam masala", "Chili"],
						founded: "1947 (from UK)",
					},
					"Sri Lanka": {
						official: ["Rice and curry"],
						recommended: ["Kottu roti", "Hoppers", "Lamprais"],
						spices: [
							"Curry leaves",
							"Cinnamon",
							"Cardamom",
							"Fenugreek",
						],
						founded: "1948 (from UK)",
					},
				},
			},
			"Western Asia": {
				overview:
					"Western Asian (Middle Eastern) cuisine draws on ancient Mesopotamian and Levantine traditions, later shaped by Ottoman, Persian, and Arab influence. Grilled meats, flatbreads, rice pilafs, and meze-style shared plates are common threads, along with a reliance on ingredients like chickpeas, lamb, olive oil, and warming spices such as cumin, sumac, and za'atar.",
				countries: {
					Armenia: {
						official: ["Khorovats"],
						recommended: ["Dolma", "Lavash", "Khash"],
						spices: ["Basil", "Mint", "Coriander", "Sumac"],
						founded: "1991 (from USSR)",
					},
					Azerbaijan: {
						official: ["Plov"],
						recommended: ["Dolma", "Qutab", "Piti"],
						spices: ["Saffron", "Sumac", "Mint", "Cinnamon"],
						founded: "1991 (from USSR)",
					},
					Bahrain: {
						official: ["Machboos"],
						recommended: ["Muhammar", "Balaleet", "Harees"],
						spices: ["Cardamom", "Saffron", "Cumin", "Cinnamon"],
						founded: "1971 (from UK)",
					},
					Cyprus: {
						official: ["Souvlaki"],
						recommended: ["Meze spread", "Kleftiko", "Loukoumades"],
						spices: ["Coriander seed", "Cumin", "Mint", "Oregano"],
						founded: "1960 (from UK)",
					},
					Iraq: {
						official: ["Masgouf"],
						recommended: ["Dolma", "Kubba", "Biryani"],
						spices: ["Cumin", "Sumac", "Cardamom", "Dried lime"],
						founded: "1932 (from UK)",
					},
					Israel: {
						official: ["Hummus & falafel"],
						recommended: ["Shakshuka", "Sabich", "Malabi"],
						spices: ["Za'atar", "Sumac", "Cumin", "Mint"],
						founded: "1948",
					},
					Jordan: {
						official: ["Mansaf"],
						recommended: ["Maqluba", "Falafel", "Knafeh"],
						spices: ["Sumac", "Allspice", "Cumin", "Mint"],
						founded: "1946 (from UK)",
					},
					Kuwait: {
						official: ["Machboos"],
						recommended: ["Harees", "Gers ogaily", "Margoog"],
						spices: ["Cardamom", "Saffron", "Cumin", "Dried lime"],
						founded: "1961 (from UK)",
					},
					Lebanon: {
						official: ["Kibbeh"],
						recommended: ["Tabbouleh", "Hummus", "Manakish"],
						spices: ["Sumac", "Za'atar", "Mint", "Allspice"],
						founded: "1943 (from France)",
					},
					"Northern Cyprus": {
						official: ["Şeftali kebab"],
						recommended: ["Halloumi", "Molohiya", "Turkish coffee"],
						spices: ["Coriander seed", "Cumin", "Mint", "Sumac"],
						founded: "1983 (self-declared)",
					},
					Oman: {
						official: ["Shuwa"],
						recommended: ["Majboos", "Harees", "Halwa omani"],
						spices: ["Cardamom", "Saffron", "Cumin", "Dried lime"],
					},
					Palestine: {
						official: ["Musakhan"],
						recommended: ["Maqluba", "Knafeh", "Falafel"],
						spices: ["Sumac", "Za'atar", "Allspice", "Mint"],
					},
					Qatar: {
						official: ["Machboos"],
						recommended: ["Harees", "Balaleet", "Luqaimat"],
						spices: ["Cardamom", "Saffron", "Cumin", "Dried lime"],
						founded: "1971 (from UK)",
					},
					"Saudi Arabia": {
						official: ["Kabsa"],
						recommended: ["Mandi", "Jareesh", "Saleeg"],
						spices: ["Cardamom", "Saffron", "Cumin", "Black lime"],
						founded: "1932 (unification)",
					},
					Syria: {
						official: ["Maqluba"],
						recommended: ["Shawarma", "Fattoush", "Muhammara"],
						spices: ["Sumac", "Allspice", "Mint", "Cumin"],
						founded: "1946 (from France)",
					},
					Turkey: {
						official: ["Kebab"],
						recommended: ["Baklava", "Meze spread", "Menemen"],
						spices: ["Sumac", "Mint", "Pul biber", "Cumin"],
						founded: "1923 (Republic founded)",
					},
					"United Arab Emirates": {
						official: ["Machboos"],
						recommended: ["Luqaimat", "Balaleet", "Thareed"],
						spices: ["Cardamom", "Saffron", "Cumin", "Dried lime"],
						founded: "1971 (from UK)",
					},
					Yemen: {
						official: ["Saltah"],
						recommended: ["Mandi", "Fahsa", "Bint al-sahn"],
						spices: [
							"Fenugreek",
							"Cumin",
							"Cardamom",
							"Hawaij blend",
						],
						founded: "1990 (unification)",
					},
				},
			},
		},
	},
	Europe: {
		accent: "#6B7A4F",
		overview:
			"European cuisine varies enormously by climate and history, but shares deep roots in Mediterranean trade (olive oil, wine, wheat), the agricultural traditions of the northern and eastern plains (dairy, rye, root vegetables), and centuries of cross-border exchange through empire, migration, and trade. Regional identity remains strong — a meal in Lisbon and a meal in Helsinki can feel like different culinary worlds — even as shared techniques like bread-baking, cured meats, and cheese-making run throughout the continent.",
		groups: {
			"Northern Europe": {
				overview:
					"Northern European cuisine is shaped by a cold climate and historically short growing seasons, leaning on preserved and pickled fish, rye bread, dairy, and root vegetables. Nordic and Baltic traditions of fermentation, smoking, and curing — as with gravlax or pickled herring — developed as practical ways to store food through long winters, and remain celebrated today.",
				countries: {
					"Channel Islands": {
						official: ["Jersey Royal potatoes with butter"],
						recommended: [
							"Jersey bean crock",
							"Guernsey gâche",
							"Ormer stew",
						],
						spices: [
							"Bay leaf",
							"Black pepper",
							"Parsley",
							"Thyme",
						],
						belongsTo: "United Kingdom",
					},
					Denmark: {
						official: ["Smørrebrød"],
						recommended: [
							"Frikadeller",
							"Flæskesteg",
							"Danish pastry",
						],
						spices: ["Dill", "Bay leaf", "Allspice", "Parsley"],
					},
					Estonia: {
						official: ["Verivorst"],
						recommended: ["Mulgipuder", "Kama", "Kiluvõileib"],
						spices: ["Dill", "Caraway", "Bay leaf", "Marjoram"],
						founded: "1918 / 1991 (re-independence)",
					},
					Finland: {
						official: ["Karjalanpiirakka"],
						recommended: [
							"Salmon soup",
							"Ruisleipä",
							"Mustikkapiirakka",
						],
						spices: [
							"Dill",
							"Allspice",
							"White pepper",
							"Bay leaf",
						],
						founded: "1917 (from Russia)",
					},
					Iceland: {
						official: ["Plokkfiskur"],
						recommended: ["Hangikjöt", "Skyr", "Kleina"],
						spices: ["Dill", "Thyme", "Caraway", "Angelica"],
						founded: "1944 (from Denmark)",
					},
					"Isle of Man": {
						official: ["Manx kipper"],
						recommended: [
							"Queenies (scallops)",
							"Spuds and herrin'",
							"Bonnag bread",
						],
						spices: [
							"Black pepper",
							"Vinegar",
							"Parsley",
							"Bay leaf",
						],
						belongsTo: "United Kingdom",
					},
					Ireland: {
						official: ["Irish stew"],
						recommended: ["Boxty", "Colcannon", "Soda bread"],
						spices: ["Parsley", "Thyme", "Chives", "Bay leaf"],
						founded: "1922 (from UK)",
					},
					Latvia: {
						official: ["Rupjmaize with sprats"],
						recommended: [
							"Piragi",
							"Gray peas with bacon",
							"Skābeņu zupa",
						],
						spices: ["Dill", "Caraway", "Bay leaf", "Marjoram"],
						founded: "1918 / 1991 (re-independence)",
					},
					Lithuania: {
						official: ["Cepelinai"],
						recommended: ["Šaltibarščiai", "Kugelis", "Šakotis"],
						spices: ["Dill", "Caraway", "Marjoram", "Bay leaf"],
						founded: "1918 / 1991 (re-independence)",
					},
					Norway: {
						official: ["Fårikål"],
						recommended: ["Rakfisk", "Lutefisk", "Brunost"],
						spices: ["Dill", "Allspice", "Caraway", "Parsley"],
						founded: "1905 (from Sweden)",
					},
					Sweden: {
						official: ["Köttbullar"],
						recommended: [
							"Gravlax",
							"Kräftskiva crayfish",
							"Kanelbullar",
						],
						spices: ["Dill", "Allspice", "White pepper", "Parsley"],
					},
					England: {
						official: ["Roast dinner"],
						recommended: [
							"Fish and chips",
							"Full English breakfast",
							"Shepherd's pie",
						],
						spices: ["Mint", "Parsley", "Bay leaf", "Mustard"],
						belongsTo: "United Kingdom",
					},
					"Northern Ireland": {
						official: ["Ulster fry"],
						recommended: [
							"Champ",
							"Soda bread",
							"Irish stew (Ulster-style)",
						],
						spices: ["Black pepper", "Thyme", "Parsley", "Mustard"],
						founded: "1921 (partition of Ireland)",
						belongsTo: "United Kingdom",
					},
					Scotland: {
						official: ["Haggis"],
						recommended: [
							"Cullen skink",
							"Scotch broth",
							"Cranachan",
						],
						spices: ["Nutmeg", "Black pepper", "Thyme", "Mustard"],
						belongsTo: "United Kingdom",
					},
					Wales: {
						official: ["Cawl"],
						recommended: [
							"Welsh rarebit",
							"Bara brith",
							"Laverbread",
						],
						spices: ["Thyme", "Parsley", "Black pepper", "Mustard"],
						belongsTo: "United Kingdom",
					},
				},
			},
			"Western Europe": {
				overview:
					"Western European cuisine encompasses some of the world's most codified culinary traditions — French, Belgian, Dutch, German, and Alpine cooking — built on refined technique, dairy- and butter-forward cooking, and centuries of courtly and bourgeois dining culture that shaped much of what's now considered 'classic' Western cooking.",
				countries: {
					Austria: {
						official: ["Wiener schnitzel"],
						recommended: [
							"Tafelspitz",
							"Sachertorte",
							"Kaiserschmarrn",
						],
						spices: ["Caraway", "Paprika", "Marjoram", "Parsley"],
						founded: "1955 (full sovereignty)",
					},
					Belgium: {
						official: ["Moules-frites"],
						recommended: [
							"Waffles",
							"Carbonade flamande",
							"Frites with mayo",
						],
						spices: ["Bay leaf", "Thyme", "Nutmeg", "Parsley"],
						founded: "1830 (from Netherlands)",
					},
					France: {
						official: ["Coq au vin"],
						recommended: [
							"Boeuf bourguignon",
							"Ratatouille",
							"Croissant",
						],
						spices: [
							"Thyme",
							"Tarragon",
							"Bay leaf",
							"Herbes de Provence",
						],
					},
					Germany: {
						official: ["Sauerbraten"],
						recommended: ["Currywurst", "Schnitzel", "Bratwurst"],
						spices: ["Caraway", "Marjoram", "Juniper", "Parsley"],
						founded: "1990 (reunification)",
					},
					Liechtenstein: {
						official: ["Käsknöpfle"],
						recommended: ["Ribel", "Hafalaab", "Wädli"],
						spices: ["Parsley", "Marjoram", "Caraway", "Bay leaf"],
						founded: "1719 (established)",
					},
					Luxembourg: {
						official: ["Judd mat gaardebounen"],
						recommended: [
							"Bouneschlupp",
							"Kachkéis",
							"Gromperekichelcher",
						],
						spices: ["Thyme", "Bay leaf", "Parsley", "Juniper"],
						founded: "1839 (from Netherlands)",
					},
					Monaco: {
						official: ["Barbagiuan"],
						recommended: [
							"Socca",
							"Stocafi",
							"Fougasse monégasque",
						],
						spices: ["Thyme", "Basil", "Rosemary", "Bay leaf"],
						founded: "1297 (Grimaldi dynasty)",
					},
					Netherlands: {
						official: ["Stamppot"],
						recommended: [
							"Bitterballen",
							"Erwtensoep",
							"Stroopwafel",
						],
						spices: ["Nutmeg", "Parsley", "Bay leaf", "Dill"],
						founded: "1648 (recognized, Peace of Westphalia)",
					},
					Switzerland: {
						official: ["Fondue"],
						recommended: [
							"Rösti",
							"Raclette",
							"Zürcher geschnetzeltes",
						],
						spices: ["Parsley", "Chives", "Nutmeg", "Bay leaf"],
						founded: "1291 (traditional founding)",
					},
				},
			},
			"Eastern Europe": {
				overview:
					"Eastern European cuisine reflects a history of Slavic agricultural tradition, Ottoman and Austro-Hungarian imperial influence, and decades of Soviet-era food culture across much of the 20th century. Hearty, warming dishes — stews, dumplings, pickled vegetables, dense breads — reflect a continental climate and a long tradition of preserving food for winter.",
				countries: {
					Abkhazia: {
						official: ["Abysta with cheese"],
						recommended: [
							"Walnut sauce dishes",
							"Khachapuri variant",
						],
						spices: [
							"Coriander",
							"Blue fenugreek",
							"Dill",
							"Marigold",
						],
						founded: "1992 (self-declared, limited recognition)",
					},
					Belarus: {
						official: ["Draniki"],
						recommended: ["Machanka", "Kolduny", "Babka"],
						spices: ["Dill", "Bay leaf", "Caraway", "Marjoram"],
						founded: "1991 (from USSR)",
					},
					Bulgaria: {
						official: ["Shopska salad with banitsa"],
						recommended: ["Kavarma", "Tarator", "Sarma"],
						spices: [
							"Paprika",
							"Savory (chubritsa)",
							"Parsley",
							"Dill",
						],
						founded: "1878 (from Ottoman Empire)",
					},
					"Czech Republic": {
						official: ["Svíčková"],
						recommended: ["Goulash", "Trdelník", "Knedlíky"],
						spices: ["Caraway", "Marjoram", "Dill", "Bay leaf"],
						founded: "1993 (split from Czechoslovakia)",
					},
					Georgia: {
						official: ["Khinkali"],
						recommended: [
							"Khachapuri",
							"Chakhokhbili",
							"Churchkhela",
						],
						spices: [
							"Coriander",
							"Blue fenugreek",
							"Marigold",
							"Dill",
						],
						founded: "1991 (from USSR)",
					},
					Hungary: {
						official: ["Goulash"],
						recommended: [
							"Chicken paprikash",
							"Lángos",
							"Halászlé",
						],
						spices: ["Paprika", "Caraway", "Marjoram", "Dill"],
						founded: "1918",
					},
					Moldova: {
						official: ["Mămăligă"],
						recommended: ["Zeamă", "Plăcintă", "Sarmale"],
						spices: ["Dill", "Parsley", "Bay leaf", "Paprika"],
						founded: "1991 (from USSR)",
					},
					Poland: {
						official: ["Pierogi"],
						recommended: ["Bigos", "Żurek", "Kotlet schabowy"],
						spices: ["Dill", "Marjoram", "Caraway", "Bay leaf"],
						founded: "1918 (re-established)",
					},
					Romania: {
						official: ["Sarmale"],
						recommended: ["Mămăligă", "Mici", "Papanași"],
						spices: ["Dill", "Parsley", "Bay leaf", "Paprika"],
						founded: "1878 (from Ottoman Empire)",
					},
					Russia: {
						official: ["Pelmeni"],
						recommended: ["Beef stroganoff", "Blini", "Shchi"],
						spices: ["Dill", "Bay leaf", "Parsley", "Black pepper"],
						founded: "1991 (Russian Federation)",
					},
					Slovakia: {
						official: ["Bryndzové halušky"],
						recommended: [
							"Kapustnica",
							"Trdelník",
							"Segedín goulash",
						],
						spices: ["Caraway", "Marjoram", "Dill", "Bay leaf"],
						founded: "1993 (split from Czechoslovakia)",
					},
					"South Ossetia": {
						official: ["Ossetian pie (khabizgina)"],
						recommended: [
							"Fydjin",
							"Ossetian cheese",
							"Caucasus-style stews",
						],
						spices: [
							"Coriander",
							"Dill",
							"Marigold",
							"Blue fenugreek",
						],
						founded: "1991 (self-declared, limited recognition)",
					},
					Ukraine: {
						official: ["Borscht"],
						recommended: ["Varenyky", "Holubtsi", "Chicken Kyiv"],
						spices: ["Dill", "Bay leaf", "Parsley", "Garlic"],
						founded: "1991 (from USSR)",
					},
				},
			},
			"Southern Europe": {
				overview:
					"Southern European cuisine centers on Mediterranean staples — olive oil, wine, tomatoes, wheat — and reflects the region's long history as a crossroads of Greek, Roman, Arab, and later trade-driven culinary exchange. Fresh vegetables, seafood, and simply prepared ingredients are hallmarks, alongside strong regional identities within each country.",
				countries: {
					Albania: {
						official: ["Tavë kosi"],
						recommended: ["Byrek", "Fërgesë", "Qofte"],
						spices: ["Oregano", "Mint", "Paprika", "Bay leaf"],
						founded: "1912 (from Ottoman Empire)",
					},
					Andorra: {
						official: ["Trinxat"],
						recommended: ["Escudella", "Cunillo", "Coca de forner"],
						spices: ["Bay leaf", "Thyme", "Garlic", "Parsley"],
						founded: "1278 (co-principality established)",
					},
					"Bosnia and Herzegovina": {
						official: ["Ćevapi"],
						recommended: ["Burek", "Bosanski lonac", "Baklava"],
						spices: ["Paprika", "Parsley", "Bay leaf", "Mint"],
						founded: "1992 (from Yugoslavia)",
					},
					Gibraltar: {
						official: ["Calentita"],
						recommended: ["Rosto", "Panissa", "Torta de acelga"],
						spices: [
							"Olive oil",
							"Garlic",
							"Black pepper",
							"Rosemary",
						],
						founded: "1713 (ceded to Britain)",
						belongsTo: "United Kingdom",
					},
					Croatia: {
						official: ["Peka"],
						recommended: ["Ćevapi", "Pašticada", "Black risotto"],
						spices: ["Bay leaf", "Rosemary", "Parsley", "Paprika"],
						founded: "1991 (from Yugoslavia)",
					},
					Greece: {
						official: ["Moussaka"],
						recommended: ["Souvlaki", "Greek salad", "Spanakopita"],
						spices: ["Oregano", "Mint", "Dill", "Bay leaf"],
						founded: "1830 (from Ottoman Empire)",
					},
					Italy: {
						areas: [
							{
								name: "Piedmont / Lombardy (North)",
								official: ["Risotto alla Milanese"],
								recommended: [
									"Bagna cauda",
									"Ossobuco",
									"Panettone",
								],
								spices: [
									"Sage",
									"Rosemary",
									"Nutmeg",
									"Saffron",
								],
							},
							{
								name: "Emilia-Romagna",
								official: ["Tagliatelle al ragù"],
								recommended: [
									"Tortellini in brodo",
									"Parmigiano-Reggiano dishes",
									"Piadina",
								],
								spices: [
									"Nutmeg",
									"Bay leaf",
									"Parsley",
									"Black pepper",
								],
							},
							{
								name: "Tuscany",
								official: ["Bistecca alla Fiorentina"],
								recommended: [
									"Ribollita",
									"Pappa al pomodoro",
									"Cantucci",
								],
								spices: [
									"Rosemary",
									"Sage",
									"Garlic",
									"Black pepper",
								],
							},
							{
								name: "Campania (Naples)",
								official: ["Pizza napoletana"],
								recommended: [
									"Spaghetti alle vongole",
									"Sfogliatelle",
									"Parmigiana di melanzane",
								],
								spices: [
									"Basil",
									"Oregano",
									"Garlic",
									"Chili flakes",
								],
							},
							{
								name: "Sicily",
								official: ["Pasta alla Norma"],
								recommended: [
									"Arancini",
									"Cannoli",
									"Caponata",
								],
								spices: [
									"Saffron",
									"Cinnamon",
									"Mint",
									"Chili",
								],
							},
						],
						founded: "1861 (unification)",
					},
					Kosovo: {
						official: ["Flija"],
						recommended: ["Byrek", "Qebapa", "Tavë kosi"],
						spices: ["Paprika", "Mint", "Oregano", "Bay leaf"],
						founded: "2008 (declared, partial recognition)",
					},
					Malta: {
						official: ["Fenkata"],
						recommended: ["Pastizzi", "Aljotta", "Ftira"],
						spices: ["Bay leaf", "Mint", "Marjoram", "Parsley"],
						founded: "1964 (from UK)",
					},
					Montenegro: {
						official: ["Njeguški pršut with cheese"],
						recommended: ["Kačamak", "Cicvara", "Riblja čorba"],
						spices: ["Bay leaf", "Parsley", "Paprika", "Rosemary"],
						founded: "2006 (from Serbia and Montenegro)",
					},
					"North Macedonia": {
						official: ["Tavče gravče"],
						recommended: ["Ajvar", "Shopska salad", "Burek"],
						spices: ["Paprika", "Mint", "Parsley", "Bay leaf"],
						founded: "1991 (from Yugoslavia)",
					},
					Portugal: {
						official: ["Bacalhau à Brás"],
						recommended: [
							"Caldo verde",
							"Francesinha",
							"Pastel de nata",
						],
						spices: ["Bay leaf", "Cilantro", "Paprika", "Parsley"],
					},
					"San Marino": {
						official: ["Nidi di rondine"],
						recommended: [
							"Fagioli con le cotiche",
							"Torta tre monti",
							"Piadina",
						],
						spices: ["Rosemary", "Basil", "Sage", "Bay leaf"],
						founded: "301 CE (traditional founding)",
					},
					Serbia: {
						official: ["Ćevapi"],
						recommended: ["Pljeskavica", "Sarma", "Ajvar"],
						spices: ["Paprika", "Parsley", "Bay leaf", "Mint"],
						founded: "1878 (from Ottoman Empire)",
					},
					Slovenia: {
						official: ["Potica"],
						recommended: ["Jota", "Kranjska klobasa", "Štruklji"],
						spices: ["Bay leaf", "Parsley", "Marjoram", "Juniper"],
						founded: "1991 (from Yugoslavia)",
					},
					Spain: {
						official: ["Paella"],
						recommended: [
							"Tortilla española",
							"Jamón ibérico",
							"Gazpacho",
						],
						spices: [
							"Saffron",
							"Smoked paprika",
							"Garlic",
							"Parsley",
						],
					},
					"Vatican City": {
						official: ["Roman-style pasta (no native cuisine)"],
						recommended: [
							"Papal reception fare",
							"Italian trattoria staples",
						],
						spices: ["Basil", "Rosemary", "Oregano", "Sage"],
						founded: "1929 (Lateran Treaty)",
					},
				},
			},
		},
	},
	Oceania: {
		accent: "#4F7A6B",
		overview:
			"Oceania spans thousands of islands across the Pacific, and its cuisines reflect both deep Indigenous seafaring and earth-oven cooking traditions and, in Australia and New Zealand, significant British colonial and later multicultural immigrant influence. Coconut, taro, breadfruit, and fresh seafood are staples across much of the Pacific Islands, while Australia and New Zealand's food cultures more closely resemble other British-settler nations, layered with strong Indigenous and immigrant influences of their own.",
		groups: {
			Australasia: {
				overview:
					"Australia and New Zealand's food cultures were built on British colonial-era staples (roasts, meat pies, baking traditions) but have been reshaped by strong immigrant influence — particularly Mediterranean and Asian — alongside a growing embrace of Indigenous Aboriginal and Māori ingredients and techniques, like native Australian bush foods and Māori hāngī earth-oven cooking.",
				countries: {
					Australia: {
						official: ["Meat pie"],
						recommended: [
							"Barramundi on the barbie",
							"Lamington",
							"Vegemite on toast",
						],
						spices: [
							"Native pepperberry",
							"Lemon myrtle",
							"Bush basil",
							"Wattleseed",
						],
						founded: "1901 (Federation)",
					},
					"New Zealand": {
						official: ["Hāngī"],
						recommended: [
							"Pavlova",
							"Whitebait fritters",
							"Meat pie",
						],
						spices: ["Parsley", "Thyme", "Kawakawa", "Horopito"],
						founded: "1907 (Dominion)",
					},
				},
			},
			Melanesia: {
				overview:
					"Melanesian cuisine relies heavily on root vegetables (taro, yam, cassava), coconut, and earth-oven cooking methods that predate European contact by thousands of years. Communal, celebratory cooking — often built around a whole pig or large amounts of food prepared for shared feasts — remains central to Melanesian food culture.",
				countries: {
					Fiji: {
						official: ["Kokoda"],
						recommended: ["Lovo-cooked pork", "Palusami", "Rourou"],
						spices: ["Turmeric", "Ginger", "Chili", "Coriander"],
						founded: "1970 (from UK)",
					},
					"New Caledonia": {
						official: ["Bougna"],
						recommended: [
							"Poisson cru",
							"Civet de roussette",
							"Igname (yam) dishes",
						],
						spices: ["Coconut milk", "Lime", "Garlic", "Chili"],
						founded: "1853 (French colony established)",
						belongsTo: "France",
					},
					"Papua New Guinea": {
						official: ["Mumu"],
						recommended: ["Sago", "Kaukau dishes", "Saksak"],
						spices: ["Ginger", "Chili", "Turmeric", "Garlic"],
						founded: "1975 (from Australia)",
					},
					"Solomon Islands": {
						official: ["Poi with fish"],
						recommended: [
							"Cassava pudding",
							"Motu",
							"Kokoda-style ceviche",
						],
						spices: ["Chili", "Ginger", "Lime", "Garlic"],
						founded: "1978 (from UK)",
					},
					Vanuatu: {
						official: ["Lap lap"],
						recommended: [
							"Tuluk",
							"Coconut crab",
							"Island cabbage in coconut cream",
						],
						spices: ["Chili", "Ginger", "Lime", "Garlic"],
						founded: "1980 (from UK/France)",
					},
				},
			},
			Micronesia: {
				overview:
					"Micronesian cuisine reflects life on small, often resource-limited atolls and islands, where reef fish, coconut, breadfruit, and taro form the backbone of traditional diets. Japanese and American influence, left over from 20th-century administration of the region, is also woven into everyday cooking in places like Guam and Palau.",
				countries: {
					Guam: {
						official: ["Kelaguen"],
						recommended: ["Red rice", "Chicken kadu", "Latiya"],
						spices: [
							"Lemon or lime juice",
							"Coconut",
							"Chili",
							"Green onion",
						],
						founded: "1898 (ceded to the US)",
						belongsTo: "United States",
					},
					Kiribati: {
						official: ["Palu sami"],
						recommended: [
							"Bwabwai",
							"Raw fish salad",
							"Coconut crab",
						],
						spices: ["Chili", "Lime", "Ginger", "Garlic"],
						founded: "1979 (from UK)",
					},
					"Marshall Islands": {
						official: ["Barbecued fish with breadfruit"],
						recommended: [
							"Chukuchuk",
							"Coconut crab",
							"Preserved breadfruit",
						],
						spices: ["Chili", "Lime", "Ginger", "Garlic"],
						founded: "1986 (from US)",
					},
					Micronesia: {
						official: ["Reef fish with taro"],
						recommended: [
							"Breadfruit dishes",
							"Coconut-based stews",
							"Sashimi-style raw fish",
						],
						spices: ["Chili", "Lime", "Ginger", "Garlic"],
						founded: "1986 (from US)",
					},
					Nauru: {
						official: ["Grilled reef fish with coconut"],
						recommended: [
							"Tuna sashimi",
							"Pandanus fruit",
							"Rice with coconut cream",
						],
						spices: ["Chili", "Lime", "Ginger", "Garlic"],
						founded: "1968 (from Australia/UN)",
					},
					Palau: {
						official: ["Tuna sashimi with local greens"],
						recommended: [
							"Taro dishes",
							"Ulkoy fritters",
							"Demok coconut dessert",
						],
						spices: ["Chili", "Lime", "Ginger", "Garlic"],
						founded: "1994 (from US)",
					},
				},
			},
			Polynesia: {
				overview:
					"Polynesian cuisine centers on coconut, taro, breadfruit, and seafood, prepared using earth-oven (umu) cooking passed down through generations of Pacific voyaging cultures. Sunday and celebratory feasts remain a cornerstone of Polynesian food culture, particularly across Samoa, Tonga, and French Polynesia.",
				countries: {
					"American Samoa": {
						official: ["Palusami"],
						recommended: [
							"Oka",
							"Sapasui (Samoan chop suey)",
							"Pisupo dishes",
						],
						spices: ["Coconut cream", "Ginger", "Garlic", "Lime"],
						founded: "1900 (ceded to the US)",
						belongsTo: "United States",
					},
					"French Polynesia": {
						official: ["Poisson cru"],
						recommended: [
							"Fafa (taro leaves in coconut)",
							"Poe (fruit pudding)",
							"Chow mein (Chinese-Tahitian)",
						],
						spices: ["Coconut milk", "Lime", "Vanilla", "Ginger"],
						founded: "1880 (French protectorate)",
						belongsTo: "France",
					},
					Samoa: {
						official: ["Palusami"],
						recommended: ["Oka", "Panipopo", "Umu-roasted pork"],
						spices: ["Ginger", "Chili", "Lime", "Garlic"],
						founded: "1962 (from New Zealand)",
					},
					Tonga: {
						official: ["Lu pulu"],
						recommended: ["Ota ika", "'Ufi dishes", "Umu feast"],
						spices: ["Ginger", "Chili", "Lime", "Garlic"],
						founded: "1970 (end of UK protectorate)",
					},
					Tuvalu: {
						official: ["Palusami"],
						recommended: ["Pulaka", "Coconut fish", "Breadfruit"],
						spices: ["Chili", "Lime", "Ginger", "Garlic"],
						founded: "1978 (from UK)",
					},
				},
			},
		},
	},
};

export const REGION_ORDER = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

import "./temple.css";
import Card from "../../components/Card.jsx";
import Badrinath from "../../assets/images/Temple/badrinath.webp";
import Tungnath from "../../assets/images/Temple/Tungnath.png";
import LakshmanSiddh from "../../assets/images/Temple/lakshmansiddh.png";
import KalpeshwarMahadev from "../../assets/images/Temple/KalpeshwarMahadev.png";
function Temple() {
    return (
        <div className={"temple-container"}>
            <div className={"temple-banner"}>
                <img src={Badrinath} alt="badrinath.webp"/>
            </div>

            <div className={"temple-description"}>

                <div className={"yatra-list"}>

                    <div className={""}>
                        <h3>Char Dham</h3>
                        <ul>
                            <li><span>Yamunotri</span>: Source of the Yamuna river, dedicated to Goddess Yamuna.</li>
                            <li><span>Gangotri</span>: Origin of the Ganges river, dedicated to Goddess Ganga.</li>
                            <li><span>Kedarnath</span>: One of the twelve Jyotirlingas, dedicated to Lord Shiva.</li>
                            <li><span>Badrinath</span>: Dedicated to Lord Vishnu, one of the Char Dham sites.</li>
                        </ul>
                    </div>

                    <div className={""}>
                        <h3>Panch Prayag</h3>
                        <ul>
                            <li>Vishnuprayag: Confluence of the Alaknanda and Dhauliganga rivers.</li>
                            <li>Nandaprayag: Confluence of the Alaknanda and Nandakini rivers.</li>
                            <li>Karnaprayag: Confluence of the Alaknanda and Pindar rivers.</li>
                            <li>Rudraprayag: Confluence of the Alaknanda and Mandakini rivers.</li>
                            <li>Devprayag: Confluence of the Alaknanda and Bhagirathi rivers, forming the Ganges.</li>
                        </ul>
                    </div>


                    <div className={""}>
                        <h3>Panch Kedar</h3>
                        <ul>
                            <li>Kedarnath: As mentioned, it houses the hump of Lord Shiva.</li>
                            <li>Madhmaheshwar: Where the navel of Lord Shiva is believed to have emerged.</li>
                            <li>Tungnath: The temple dedicated to Lord Shiva's arms.</li>
                            <li>Rudranath: Lord Shiva's face is said to be present here.</li>
                            <li>Kalpeshwar: Associated with Lord Shiva's hair.</li>
                        </ul>
                    </div>


                    <div className={""}>
                        <h3>Panch Badri</h3>
                        <ul>
                            <li>Yogdhyan Badri: Where Pandu, father of the Pandavas, is said to have meditated.</li>
                            <li>Bhavishya Badri: It is believed that this will be the future (bhavishya) abode of Lord Badri.</li>
                            <li>Vridha Badri: This temple is located in Animath and is believed to be the "Old Badri".</li>
                            <li>Adi Badri: Group of 16 temples dedicated to Lord Vishnu.</li>
                            <li>Vishal Badri: Refers to the main Badrinath temple among the Panch Badri sites.</li>
                        </ul>
                    </div>
                </div>

            </div>


            <h1 className="explore-uttarakhand-title">Explore Uttarakhand Temple</h1>

            {/* Temple Card */}
            <p className={"temple-district-title"}>Almora</p>
            <div className={"temple-card-container"}>
                <Card   heading={"Kasar Devi Temple"}     description={"Associated with Shakti and cosmic powers, said to bless wishes and creativity."}                                                    link={"kasardevi"}         img={"https://upload.wikimedia.org/wikipedia/commons/0/01/Goddess_Kasar_Devi.jpg"}                                                                                                   imgDescription={"Kasar Devi Temple Image"} />
                <Card   heading={"Katarmal Sun"}          description={"9th century temple dedicated to the Sun God, known for its intricate stonework and beautiful location."}                            link={"katarmalsun"}       img={"https://assets.cntraveller.in/photos/61f9153c5dabee8b6de788c9/master/pass/katarmal%20temple%20lead.jpg"}                                                                       imgDescription={"Katarmal Sun Temple Image"} />
                <Card   heading={"Chitai Golu Devta"}     description={"Shrine dedicated to Golu Devta, a local deity known for his justice and protection of the Kumaon region."}                          link={"chitaigoludevta"}   img={"https://www.jagranimages.com/images/newimg/20062022/20_06_2022-golu_devta_mandir_applications_22821223_203927302.webp"}                                                        imgDescription={"Chitai Golu Devta Temple Image"} />
                <Card   heading={"Jageshwar Dham"}        description={"127 temples dedicated to Lord Shiva, showcasing ancient architectural styles."}                                                     link={"jageshwardham"}     img={"https://i.pinimg.com/originals/9a/6a/1d/9a6a1dd42fee8a76fc324421644d83b0.jpg"}                                                                                                 imgDescription={"Jageshwar Dham Temple Image"} />
                <Card   heading={"Nanda Devi"}            description={"Known as \"Daughter of Kumaon\". Worshipped as an incarnation of Durga Mata, it was the patron goddess of the Chand dynasty."}      link={"nandadevi"}         img={"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Nanda_Devi_temple_-Almora-Uttarakhand_-DSC_0001.jpg/1200px-Nanda_Devi_temple_-Almora-Uttarakhand_-DSC_0001.jpg"}     imgDescription={"Nanda Devi Temple Image"} />

            </div>

            <p className={"temple-district-title"}>Bageshwar</p>
            <div className={"temple-card-container"}>
                <Card   heading={"Baijnath Temple"}     description={"One of the 12 Jyotirlingas, representing Lord Shiva's fiery form, with mythological significance."}   link={"baijnathtemple"}     img={"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Temples_of_Baijnath%2C_Uttarakhand%2C_India.jpg/800px-Temples_of_Baijnath%2C_Uttarakhand%2C_India.jpg"}     imgDescription={"Baijnath Temple Image"}/>
                <Card   heading={"Bagnath Temple"}      description={"Ancient cave temple dedicated to Lord Shiva, known for its natural beauty and spiritual aura."}       link={"bagnathtemple"}      img={"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/5d/53/b4/the-bagnath-shrine.jpg?w=1200&h=1200&s=1"}                                                        imgDescription={"Bagnath Temple Image"}/>
            </div>

            <p className={"temple-district-title"}>Chamoli</p>
            <div className={"temple-card-container"}>
                <Card   heading={"Badrinath Temple"}        description={"One of the Char Dhams, dedicated to Lord Vishnu in his meditative form, nestled in the Himalayas."}                           link={"badrinathtemple"}        img={"https://images.squarespace-cdn.com/content/v1/5cbf0b8fb914490e248bb275/1590518455488-AP5KVOEZDTDLP9BZAHJX/badrinath.jpg"}     imgDescription={"Badrinath Temple Image"}/>
                <Card   heading={"Tungnath Temple"}         description={"Highest Shiva temple in the world, offering breathtaking views and religious significance."}                                  link={"tungnath"}               img={Tungnath}                                                                                                                      imgDescription={"Tungnath Temple Image"}/>
                <Card   heading={"Rudranath Temple"}        description={"Part of Panch Kedars, dedicated to Lord Shiva, accessible through a challenging trek."}                                       link={"rudranath"}              img={"https://i.pinimg.com/736x/a9/73/c9/a973c94e29b260c11b74f528e800d419.jpg"}                                                     imgDescription={"Rudranath Temple Image"}/>
                <Card   heading={"Kalpeshwar Temple"}       description={"Part of Panch Kedars, dedicated to Lord Shiva, amidst scenic meadows."}                                                       link={"kalpeshwar"}             img={"https://static.punjabkesari.in/multimedia/11_48_449385390kalpeshwar-mahadev-temple3.jpg"}                                     imgDescription={"Kalpeshwar Temple Image"}/>
                <Card   heading={"Gopinath Temple"}         description={"Dedicated to Lord Krishna, known for its intricate carvings and peaceful atmosphere."}                                        link={"gopinath"}               img={"https://i.pinimg.com/originals/e4/72/13/e47213b97d8e4fa152f34253a16dc57e.jpg"}                                                imgDescription={"Gopinath Temple Image"}/>
                <Card   heading={"Adi Badri Temple"}        description={"Ancient temple marking the start of Lord Vishnu's journey, offering scenic Himalayan views."}                                 link={"adibadri"}               img={"https://www.sacredyatra.com/images/temples/adi-badri-temple.webp"}                                                            imgDescription={"Adi Badri Temple Image"}/>
                <Card   heading={"Bhavishya Badri"}         description={"Believed to be the future abode of Lord Vishnu after Kali Yuga"}                                                              link={"bhavishyabadri"}         img={"https://www.sacredyatra.com/images/temples/bhavishya-badri-temple.webp"}                                                      imgDescription={"Bhavishya Badri Temple Image"}/>
                <Card   heading={"Vridha Badri Temple"}     description={"8th-century temple enshrines Lord Vishnu in his aged form."}                                                                  link={"vridhabadri"}            img={"https://www.chardhamtours.in/gallery/cityImage/1463377458_vridh-badri.jpg"}                                                   imgDescription={"Vridha Badri Temple Image"}/>
                <Card   heading={"Yogadhyan Badri"}         description={"Depicting Lord Vishnu in a meditative posture, temple offers tranquility and is associated with spiritual practices. "}       link={"yogadhyanbadri"}         img={"https://www.chardhamtours.in/gallery/cityImage/1462776303_Yog-dhyan-badri-temples.jpg"}                                       imgDescription={"Yogadhyan Badri Temple Image"}/>
                <Card   heading={"Hemkund Sahib"}           description={"Depicting Lord Vishnu in a meditative posture, temple offers tranquility and is associated with spiritual practices. "}       link={"hemkundsahib"}           img={"https://www.chardhamtours.in/gallery/cityImage/1462776303_Yog-dhyan-badri-temples.jpg"}                                       imgDescription={"Gurudwara Sri Hemkunt Sahib Ji Image"}/>
            </div>

            <p className={"temple-district-title"}>Champawat</p>
            <div className={"temple-card-container"}>
                <Card heading={"Baleshwar Temple"} description={"Ancient Shiva temple known for its intricate stone carvings"} link={"baleshwar"} img={"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/08/a3/53/the-main-temple.jpg?w=1200&h=-1&s=1"} imgDescription={"Baleshwar Temple Image"}/>
            </div>

            <p className={"temple-district-title"}>Dehradun</p>
            <div className={"temple-card-container"}>
                <Card heading={"Neelkanth Mahadev"} description={"Dedicated to goddess Santala Devi, known for vibrant atmosphere and blessings for prosperity and well-being"} link={"neelkanthmahadev"} img={"https://www.gangakinare.com/images/sightseeing/neelkanth-mahadev-temple.jpg"} imgDescription={"Neelkanth Mahadev Temple Image"}/>
                <Card heading={"Tapkeshwar Temple"} description={"Cave temple dedicated to Shiva, with natural hot water spring believed to have healing powers."} link={"tapkeshwar"} img={"https://www.holidify.com/images/cmsuploads/compressed/attr_2340_20220113173917.jpg"} imgDescription={"Tapkeshwar Temple Image"}/>
                <Card heading={"Lakshman Siddh"} description={"Dedicated to Lakshmana, brother of Lord Rama, known for its peaceful atmosphere and scenic beauty."} link={"lakshmansiddh"} img={LakshmanSiddh} imgDescription={"Lakshman Siddh Temple Image"}/>
                <Card heading={"Santala Devi Temple"} description={"Dedicated to goddess Santala Devi, known for vibrant atmosphere and blessings for prosperity and well-being"} link={"santaladevi"} img={"https://i.ytimg.com/vi/kGYhweVaMwg/maxresdefault.jpg"} imgDescription={"Santala Devi Temple Image"}/>
            </div>

            <p className={"temple-district-title"}>Haridwar</p>
            <div className={"temple-card-container"}>
                <Card heading={"Mansa Devi Temple"} description={"Grants wishes & blessings, atop Bilwa Parvat with panoramic views."} link={"mansadevi"} img={"https://i.pinimg.com/736x/09/e0/9f/09e09fe892600d7a438caad726ce9f71.jpg"} imgDescription={"Mansa Devi Temple Image"}/>
                {/*<Card heading={"Chandi Devi Temple"} description={"Shakti & blessings for prosperity, ropeway ascent offering hilltop vistas."} link={"Chandi Devi"} img={""} imgDescription={"Chandi Devi Temple Image"}/>*/}
                {/*<Card heading={"Maya Devi Temple"} description={"Illusion & creation, associated with motherly energy, near Chandi Devi temple."} link={"Maya Devi"} img={""} imgDescription={"Maya Devi Temple Image"}/>*/}
                <Card heading={"Daksheswara Mahadev"} description={"Dedicated to Shiva, site of his sacrifice & associated with Sati."} link={"daksheswaramahadev"} img={"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/92/14/42/temple.jpg?w=1200&h=-1&s=1"} imgDescription={"Daksheswara Mahadev Temple Image"}/>
                {/*<Card heading={"Bharat Mata Mandir"} description={"Mother India personified, showcasing diverse culture & unity."} link={"Bharat Mata Mandir"} img={""} imgDescription={"Bharat Mata Mandir Temple Image"}/>*/}
            </div>

            <p className={"temple-district-title"}>Nainital</p>
            <div className={"temple-card-container"}>
                <Card heading={"Garjiya Mata"} description={"Temple dedicated to the goddess Garjiya Devi, located near the Kosi River."} link={"garjiyamata"} img={"https://www.templepurohit.com/wp-content/uploads/2015/12/temple.jpg"} imgDescription={"Garjiya Mata Temple Image"}/>
                <Card heading={"Naina Devi Temple"} description={"One of the 51 Shakti Peethas, dedicated to the goddess Naina Devi, situated near Naini Lake."} link={"nainadevi"} img={"https://i.pinimg.com/736x/2d/be/6a/2dbe6a5a0573de24aef79ce0c74bc2ae.jpg"} imgDescription={"Naina Devi Temple Image"}/>
                <Card heading={"Mukteshwar Temple"} description={"10th century Temple dedicated to Lord Shiva, offering panoramic views from an altitude of 2,312 meters."} link={"mukteshwar"} img={"https://rishikeshdaytour.com/blog/wp-content/uploads/2019/10/The-Path-Of-Salvation-Mukteshwar-Mahadev-Temple-Nainital-1-e1679803036381.jpg"} imgDescription={"Mukteshwar Temple Image"}/>
                {/*<Card heading={"Hanuman Garhi"} description={"Temple dedicated to Lord Hanuman, located near the Naina Devi Temple."} link={"hanumangarhi"} img={""} imgDescription={"Hanuman Garhi Temple Image"}/>*/}
                <Card heading={"Kainchi Dham"} description={"Dedicated to Neem Karoli Baba, a spiritual figure who attracted many followers, including Steve Jobs and Mark Zuckerberg."} link={"kainchidham"} img={"https://icdn.isrgrajan.com/in/2021/01/Kainchi-Dham-Steve-Jobs-Mark-Zuckerberg.jpg"} imgDescription={"Kainchi Dham Temple Image"}/>
            </div>

            <p className={"temple-district-title"}>Pauri Garhwal</p>
            <div className={"temple-card-container"}>
                <Card heading={"Dhari Devi"} description={"Himalayan shrine dedicated to the guardian deity of Uttarakhand."} link={"dharidevi"} img={"https://i.pinimg.com/736x/ba/04/7a/ba047a53fca19311f545f142a8733ad9.jpg"} imgDescription={"Dhari Devi Temple Image"}/>
                {/*<Card heading={"Agastyamuni"} description={"Legendary sage's abode, known for its spiritual aura and scenic beauty."} link={""} img={""} imgDescription={"Temple Image"}/>*/}
            </div>

            <p className={"temple-district-title"}>Pithoragarh</p>
            <div className={"temple-card-container"}>
                <Card heading={"Patal Bhuvaneshwar"} description={"A cave temple dedicated to Lord Shiva, with intricate carvings and a naturally formed Shivling."} link={"patalbhuvaneshwar"} img={"https://live-liamtra-blog.s3.ap-south-1.amazonaws.com/2020/12/LMV5pn6XjqAg-1024x576.jpg"} imgDescription={"Patal Bhuvaneshwar Temple Image"}/>
                {/*<Card heading={"Gangolihat Temple"} description={"A group of temples dedicated to various deities, including Shiva, Parvati, and Hanuman."} link={"gangolihat"} img={""} imgDescription={"Gangolihat Temple Image"}/>*/}
                <Card heading={"Kapileshwar Mahadev"} description={"Dedicated to Lord Shiva, known for its intricate stonework and peaceful atmosphere."} link={"kapileshwarmahadev"} img={KalpeshwarMahadev} imgDescription={"Kapileshwar Mahadev Temple Image"}/>
                <Card heading={"Arjuneshwar Shiva"} description={"Dedicated to Lord Shiva, believed to be built by Pandavas, offering religious and historical significance."} link={"arjuneshwarshiva"} img={"https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2023/12/18/98b86f447093d18ce372bdb5bfb5138d_1000x1000.jpg"} imgDescription={"Arjuneshwar Shiva Temple Image"}/>
            </div>

            <p className={"temple-district-title"}>Rudraprayag</p>
            <div className={"temple-card-container"}>
                <Card heading={"Kedarnath Temple"} description={"Lord Shiva's majestic abode in the Himalayas, one of the Char Dhams."} link={"kedarnath"} img={"https://vl-prod-static.b-cdn.net/system/images/000/603/362/b8be572d6fdb0c50b5e66491e67aa232/banner/jpg-20220401-231304-0000.jpg?1656025793"} imgDescription={"Kedarnath Temple Temple Image"}/>
                <Card heading={"Triyuginarayan"} description={"Ancient temple dedicated to Lord Vishnu, nestled amidst scenic mountains."} link={"triyuginarayan"} img={"https://i.pinimg.com/originals/55/8e/c9/558ec9107bac63654ba3ff6613de6cc7.jpg"} imgDescription={"Triyuginarayan Temple Image"}/>
                <Card heading={"Kartik Swami"} description={"Picturesque temple perched on a hill, offering panoramic views and religious significance."} link={"kartikswami"} img={"https://rishikeshdaytour.com/blog/wp-content/uploads/2019/06/Trek-To-Kartik-Swami-Temple.jpg"} imgDescription={"Kartik Swami Temple Image"}/>
                <Card heading={"Ukhimath Temple"} description={"Winter abode of Lord Shiva, vibrant pilgrimage site with mythological connections."} link={"ukhimath"} img={"https://www.trawell.in/admin/images/upload/387998123Kedarnath_Ukhimath_Main.jpg"} imgDescription={"Ukhimath Temple Image"}/>

                <Card heading={"Kashi Vishwanath"} description={"Dedicated to Lord Shiva. Ukhimath"} link={""} img={""} imgDescription={""}/>
                <Card heading={"Augustmuni Temple"} description={"Cave temple revered for its natural beauty and association with sage Agastya."} link={""} img={""} imgDescription={"Temple Image"}/>
                <Card heading={"Koteshwar Mahadev"} description={" Ancient temple adorned with intricate carvings, known for its spiritual atmosphere."} link={""} img={""} imgDescription={"Temple Image"}/>
            </div>

            <p className={"temple-district-title"}>Tehri Garhwal</p>
            <div className={"temple-card-container"}>
                <Card heading={"Chandrabadni"} description={"Himalayan peak with a temple dedicated to Shakti, offering panoramic views and challenging treks."} link={""} img={""} imgDescription={"Temple Image"}/>
                <Card heading={"Surkanda Devi"} description={"Hilltop shrine dedicated to Sati, offering scenic beauty and religious significance."} link={""} img={""} imgDescription={"Temple Image"}/>
                <Card heading={"Kunjapuri Temple"} description={"Siddhपीठ dedicated to Maa Kali, known for its panoramic views and spiritual energy."} link={""} img={""} imgDescription={"Temple Image"}/>
            </div>

            <p className={"temple-district-title"}>Udham Singh Nagar</p>
            <div className={"temple-card-container"}>
                <Card heading={"Golu Devta Temple"} description={"Local warrior deity known for justice, attracts devotees seeking blessings in legal matters and disputes. Ghorakhal"} link={""} img={""} imgDescription={"Temple Image"}/>
                <Card heading={"Purnagiri Temple"} description={"Hilltop temple dedicated to Shakti, offering panoramic views and believed to fulfill wishes and desires."} link={""} img={""} imgDescription={"Temple Image"}/>
            </div>

            <p className={"temple-district-title"}>Uttarkashi</p>
            <div className={"temple-card-container"}>
                <Card heading={"Gangotri Temple"} description={"Source of Ganges River, dedicated to Goddess Ganga, one of Char Dhams."} link={""} img={""} imgDescription={"Temple Image"}/>
                <Card heading={"Yamunotri Temple"} description={"Source of Yamuna River, dedicated to Goddess Yamuna, sister of Ganga."} link={""} img={""} imgDescription={"Temple Image"}/>
                <Card heading={"Uttarkashi Vishwanath"} description={"Ancient Shiva temple, known for its spiritual aura and intricate carvings."} link={""} img={""} imgDescription={"Temple Image"}/>
                <Card heading={"Kuteti Devi Temple"} description={"Local goddess temple, associated with prosperity and well-being, offers panoramic views."} link={""} img={""} imgDescription={"Temple Image"}/>
            </div>

        </div>
    );
}

export default Temple;
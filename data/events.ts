import type { TimelineEvent } from "@/lib/types";

/**
 * ---------------------------------------------------------------------------
 * HOW TO EDIT THIS FILE
 * ---------------------------------------------------------------------------
 * One object per event. Nothing else in the app needs changing when you add,
 * remove or reclassify an event.
 *
 *   id           unique slug, lowercase, hyphenated
 *   date         "1947", "1947-08" or "1947-08-14" (used only for sorting)
 *   displayDate  whatever you want printed, e.g. "14 Aug 1947"
 *   title        short, under about eight words
 *   description  three to five lines, roughly 45 to 75 words
 *   layer        "british" | "indian" | "naga"
 *   location     optional { lat, lng, place, approximate? }
 *   plate        optional reference map id from lib/layers.ts
 *
 * LAYER CONVENTION: layers are assigned by actor, not by method.
 *   british  the colonial state and its officers
 *   indian   the Union government and the state of Nagaland
 *   naga     Naga political organisations pressing a claim on the state,
 *            which includes the NNC, FGN and NSCN factions, and also the
 *            NPC and ENPO even though both worked constitutionally
 * Agreements signed by the government sit on the "indian" layer, with the
 * Naga side's response filed separately where it diverged. Flip any of these
 * by changing one word if you read the actors differently.
 *
 * COORDINATES: village-level sites from the nineteenth and mid-twentieth
 * century are marked `approximate: true`. Treat them as indicative.
 * ---------------------------------------------------------------------------
 */

export const events: TimelineEvent[] = [
  // ==========================================================
  // BRITISH
  // ==========================================================
  {
    id: "first-expedition-1832",
    date: "1832-01",
    displayDate: "1832",
    title: "First British expedition into the hills",
    description:
      "Captains Francis Jenkins and R. Boileau Pemberton march from Manipur towards Assam with 700 soldiers and 800 porters, looking for a land route. Angami villages resist along the way, rolling stones down the slopes and fighting with spears against Company muskets. Nothing is annexed, but the hills are now surveyed ground.",
    layer: "british",
    location: { lat: 25.6751, lng: 94.1086, place: "Angami country, near Kohima", approximate: true },
    plate: "nagaland-physical",
  },
  {
    id: "razepemah-1850",
    date: "1850",
    displayDate: "1850",
    title: "Razepemah levelled",
    description:
      "The Angami village of Razepemah is destroyed after attacking a neighbouring community. Its lands are declared desolate and the inhabitants dispersed. Punitive destruction of villages becomes the standard colonial answer to raiding, applied for the next fifty years across the administered frontier.",
    layer: "british",
    location: { lat: 25.7, lng: 94.05, place: "Razepemah, Angami country", approximate: true },
  },
  {
    id: "kikruma-1850",
    date: "1850-12",
    displayDate: "Dec 1850 – Jan 1851",
    title: "Battle of Kikrüma",
    description:
      "Major John Butler leads a heavily armed force against the hilltop village of Kikrüma, which had openly challenged the British to fight. Over 300 Naga warriors are killed and the village and its granaries burned, except for six houses the troops shelter in. Butler calls it one of the bloodiest battles ever fought in Assam.",
    layer: "british",
    location: { lat: 25.53, lng: 94.33, place: "Kikrüma (Phugwumi), Phek", approximate: true },
  },
  {
    id: "leave-well-alone-1851",
    date: "1851",
    displayDate: "1851",
    title: "Dalhousie orders non-interference",
    description:
      "After the cost of the Kikrüma campaign, Governor-General Lord Dalhousie pulls troops back to the plains and declares that the imperial government will not attempt to hold or administer barren hill tracts. The policy holds for fifteen years while raids on tea estates continue.",
    layer: "british",
    location: { lat: 22.5726, lng: 88.3639, place: "Calcutta", approximate: true },
  },
  {
    id: "naga-hills-district-1866",
    date: "1866",
    displayDate: "1866",
    title: "Naga Hills District created",
    description:
      "Cecil Beadon's Forward Policy reverses non-interference, asserting sovereign rights over the northern slopes of the Barail and Patkai. The Naga Hills District is constituted and the first outpost planted at Samaguting, modern Chümoukedima, with a political officer posted to watch movement in and out of the hills.",
    layer: "british",
    location: { lat: 25.8283, lng: 93.8262, place: "Samaguting (Chümoukedima)" },
  },
  {
    id: "inner-line-1873",
    date: "1873",
    displayDate: "1873",
    title: "The Inner Line is drawn",
    description:
      "The Bengal Eastern Frontier Regulation creates a legal and physical boundary between the administered plains and the hill tracts. Outsiders cannot cross it or hold land beyond it without a permit. Framed as protection for tribal populations, it also insulates tea, timber and oil investments from unregulated contact.",
    layer: "british",
    location: { lat: 26.1445, lng: 91.7362, place: "Assam frontier", approximate: true },
  },
  {
    id: "kohima-hq-1878",
    date: "1878",
    displayDate: "1878",
    title: "Headquarters moved to Kohima",
    description:
      "The district headquarters shifts from Samaguting at the edge of the hills up to Kohima, deep in Angami territory. A sub-centre follows at Mokokchung in the Ao region in 1888. Administration is now inside the highlands rather than watching them from below.",
    layer: "british",
    location: { lat: 25.6751, lng: 94.1086, place: "Kohima" },
  },
  {
    id: "damant-khonoma-1879",
    date: "1879-10-14",
    displayDate: "14 Oct 1879",
    title: "Damant killed at Khonoma",
    description:
      "G.H. Damant, first Deputy Commissioner of the Naga Hills District, marches to the fortified Angami village of Khonoma to inspect weapons and enforce tax compliance. He and 35 troopers are ambushed and killed at the village gates, triggering the largest colonial military campaign in the hills.",
    layer: "british",
    location: { lat: 25.6486, lng: 94.0139, place: "Khonoma" },
  },
  {
    id: "khonoma-peace-1880",
    date: "1880-03-27",
    displayDate: "27 Mar 1880",
    title: "Khonoma falls, but signs nothing",
    description:
      "After months of shelling the stone khels and burning surrounding granaries, Colonel Johnstone's force forces terms. Naga chiefs agree verbally to stop attacking outposts and plains settlements, and explicitly refuse to sign any written treaty surrendering sovereign rights. That refusal becomes the foundational document of Naga nationalism, precisely because it does not exist.",
    layer: "british",
    location: { lat: 25.6486, lng: 94.0139, place: "Khonoma" },
  },
  {
    id: "district-annexed-1881",
    date: "1881",
    displayDate: "1881",
    title: "Formal annexation",
    description:
      "The Naga Hills District is incorporated into British India as an administrative district of Assam, with Kohima as its permanent capital. A house tax is imposed on every household, headhunting and slavery are outlawed, and the Dobashi interpreter system is created to translate between officers and village elders.",
    layer: "british",
    location: { lat: 25.6751, lng: 94.1086, place: "Kohima" },
  },
  {
    id: "tuensang-unadministered-1902",
    date: "1902",
    displayDate: "1902",
    title: "Tuensang left unadministered",
    description:
      "An Order-in-Council classifies the trans-Dikhu region as an unadministered Tribal Area under the Governor-General, exercised through the Governor of Assam. The British largely stay out, mounting occasional punitive marches. Three-quarters of Naga territory therefore enters the twentieth century outside any administration at all.",
    layer: "british",
    location: { lat: 26.268, lng: 94.825, place: "Tuensang" },
  },
  {
    id: "labour-corps-1917",
    date: "1917",
    displayDate: "1917–18",
    title: "Naga Labour Corps sails for France",
    description:
      "Over 2,000 men from the Angami, Ao, Sumi, Lotha, Rengma, Konyak and Chang communities are recruited to serve behind Allied lines in France and North Africa. Shared service produces the first working sense of a single Naga people, cutting across villages that had until then been politically separate.",
    layer: "british",
    location: { lat: 50.1, lng: 2.7, place: "Western Front, France", approximate: true },
  },
  {
    id: "jadonang-hanged-1931",
    date: "1931-08",
    displayDate: "Aug 1931",
    title: "Jadonang hanged at Imphal",
    description:
      "The Rongmei spiritual leader Haipou Jadonang, whose Heraka movement resisted colonial taxation among the Zeliangrong and called for a Naga Raj, is executed for sedition. His sixteen-year-old cousin Gaidinliu takes over the armed movement in North Cachar and the southern hills.",
    layer: "british",
    location: { lat: 24.817, lng: 93.9368, place: "Imphal Jail" },
  },
  {
    id: "gaidinliu-captured-1932",
    date: "1932",
    displayDate: "1932",
    title: "Gaidinliu captured at Pulomi",
    description:
      "A joint force under Captain Macdonald, political officer J.C. Higgins and Deputy Commissioner J.P. Mills takes Gaidinliu at Pulomi village. She is sentenced to life imprisonment and held until 1947. Nehru, meeting her in Shillong Jail in 1937, gives her the title Rani.",
    layer: "british",
    location: { lat: 25.6, lng: 94.3, place: "Pulomi", approximate: true },
  },
  {
    id: "pangsha-1933",
    date: "1933",
    displayDate: "1933",
    title: "The Pangsha expedition",
    description:
      "J.P. Mills and the ethnographer Christoph von Fürer-Haimendorf burn the unadministered Khiamniungan village of Pangsha, guided by Chief Chingmak of Chingmei. Administrators double as anthropologists throughout this period, and their monographs harden fluid village republics into fixed, countable tribes.",
    layer: "british",
    location: { lat: 26.06, lng: 95.1, place: "Pangsha, Noklak", approximate: true },
  },
  {
    id: "excluded-area-1936",
    date: "1936",
    displayDate: "1936",
    title: "Classified as an Excluded Area",
    description:
      "Acting on the Simon Commission's acceptance that the hills share no affinity with the plains, the Government of India Act framework places the Naga Hills outside ordinary provincial legislation, under the Governor's direct charge. Exclusion is meant as insulation. It also builds the legal architecture for treating the region as constitutionally separate.",
    layer: "british",
    location: { lat: 25.6751, lng: 94.1086, place: "Naga Hills District" },
  },
  {
    id: "crown-colony-1941",
    date: "1941-11",
    displayDate: "Nov 1941",
    title: "The Crown Colony plan",
    description:
      "Sir Robert Reid, Governor of Assam, drafts a confidential note proposing a crescent-shaped hill territory joining the Naga, Lushai and Balipara tracts to the Chin and Kachin hills of Burma, answerable to Whitehall. His successor Andrew Clow calls it fantastic and geographically incoherent, and Burma's administrators reject it in 1946.",
    layer: "british",
    location: { lat: 25.5788, lng: 91.8933, place: "Shillong" },
  },
  {
    id: "kohima-1944",
    date: "1944-04-04",
    displayDate: "4 Apr – 22 Jun 1944",
    title: "The Battle of Kohima",
    description:
      "Japan's 15th Army and the INA advance to cut the Dimapur–Imphal road. Fighting closes to hand-to-hand across the tennis court of the Deputy Commissioner's bungalow. Naga scouts and guerrillas, including Ursula Graham Bower's Zeme unit, work for the Allies while Phizo supplies route intelligence to the Japanese. The front costs Japan over 53,000 casualties.",
    layer: "british",
    location: { lat: 25.6751, lng: 94.1086, place: "Kohima" },
  },
  {
    id: "nhdtc-1945",
    date: "1945-04",
    displayDate: "Apr 1945",
    title: "Pawsey convenes the Tribal Council",
    description:
      "Deputy Commissioner Charles Pawsey sets up the Naga Hills District Tribal Council at Wokha to handle post-war relief and reconstruction money. It is an administrative convenience. Within ten months it has renamed itself and become the vehicle for a national claim.",
    layer: "british",
    location: { lat: 26.093, lng: 94.26, place: "Wokha" },
  },
  {
    id: "hydari-accord-1947",
    date: "1947-06-26",
    displayDate: "26–28 Jun 1947",
    title: "The Nine-Point Agreement",
    description:
      "Sir Akbar Hydari, Governor of Assam, signs a nine-point accord with NNC leaders granting executive and judicial authority over land, customary law and resources. Point 9 gives the Governor special responsibility for ten years, after which the NNC would be asked what it wanted next. Both sides read that clause completely differently, and the accord never functions.",
    layer: "british",
    location: { lat: 25.5788, lng: 91.8933, place: "Kohima and Shillong", approximate: true },
  },
  {
    id: "british-departure-1947",
    date: "1947-08-15",
    displayDate: "15 Aug 1947",
    title: "The British leave",
    description:
      "Pawsey's parting remark is that it seems a pity there were not a few more years to get things straight. He leaves behind a divided territory: one quarter administered as a district of Assam, three quarters unadministered hill country along the Patkai. Every dispute that follows runs along that line.",
    layer: "british",
    location: { lat: 25.6751, lng: 94.1086, place: "Kohima" },
  },

  // ==========================================================
  // NAGA / UNDERGROUND
  // ==========================================================
  {
    id: "naga-club-1918",
    date: "1918",
    displayDate: "1918",
    title: "The Naga Club is formed",
    description:
      "Twenty veterans of the Labour Corps return and, with interpreters, teachers, headmen and clerks, found the Naga Club at Kohima and Mokokchung. It is the first pan-Naga political association, created to hold a common position across tribes that had never previously needed one.",
    layer: "naga",
    location: { lat: 25.6751, lng: 94.1086, place: "Kohima" },
  },
  {
    id: "simon-memorandum-1929",
    date: "1929-01-10",
    displayDate: "10 Jan 1929",
    title: "Memorandum to the Simon Commission",
    description:
      "The Naga Club hands Sir John Simon a written memorandum at Kohima asking that the Naga Hills be excluded from constitutional reform for British India and that the Nagas be left to determine their own future as they had before annexation. Every later claim to sovereignty cites this document.",
    layer: "naga",
    location: { lat: 25.6751, lng: 94.1086, place: "Kohima" },
  },
  {
    id: "nnc-formed-1946",
    date: "1946-02-02",
    displayDate: "2 Feb 1946",
    title: "The Naga National Council",
    description:
      "Meeting at Wokha, the Tribal Council widens its mandate and renames itself the Naga National Council. It becomes the primary political institution speaking for Naga aspirations through the transfer of power, and the parent body of everything underground that follows.",
    layer: "naga",
    location: { lat: 26.093, lng: 94.26, place: "Wokha" },
  },
  {
    id: "cabinet-mission-1946",
    date: "1946-04-09",
    displayDate: "9 Apr 1946",
    title: "Memorandum to the Cabinet Mission",
    description:
      "The NNC tells the visiting British Cabinet Mission in New Delhi that the Naga future will not be bound by any arbitrary decision of the British government, and demands direct consultation. Nehru replies in August offering local autonomy inside an autonomous Assam, with village panchayats and customary courts left untouched.",
    layer: "naga",
    location: { lat: 28.6139, lng: 77.209, place: "New Delhi" },
  },
  {
    id: "phizo-gandhi-1947",
    date: "1947-07-19",
    displayDate: "19 Jul 1947",
    title: "Phizo meets Gandhi",
    description:
      "A.Z. Phizo leads an NNC delegation to Bhangi Colony in New Delhi. Gandhi reportedly tells them the Nagas have every right to be independent and that no force will be used against them. The assurance is cited by the movement for the next seventy years and was never a government position.",
    layer: "naga",
    location: { lat: 28.6139, lng: 77.209, place: "Bhangi Colony, New Delhi", approximate: true },
  },
  {
    id: "declaration-1947",
    date: "1947-08-14",
    displayDate: "14 Aug 1947",
    title: "Declaration of independence",
    description:
      "One day before India's own independence, the NNC under Phizo unilaterally declares Nagaland independent. Cables go to the United Nations in New York and to London, and the blue NNC flag is raised over Kohima. New Delhi has never recognised the declaration.",
    layer: "naga",
    location: { lat: 25.6751, lng: 94.1086, place: "Kohima" },
  },
  {
    id: "phizo-president-1950",
    date: "1950-12-11",
    displayDate: "11 Dec 1950",
    title: "Phizo elected NNC President",
    description:
      "Phizo takes formal control of the NNC and moves it from petitioning towards mass mobilisation. He is the ideological centre of Naga sovereignty from this point until his death in 1990, and his authority is what later factions fight over rather than dispute.",
    layer: "naga",
    location: { lat: 25.6751, lng: 94.1086, place: "Kohima" },
  },
  {
    id: "plebiscite-1951",
    date: "1951-05-16",
    displayDate: "16 May 1951",
    title: "The Naga plebiscite",
    description:
      "NNC cadres move village to village collecting thumb impressions, and claim that 99.9 percent back complete independence. The exercise is voluntary and unofficial, and it did not reach Tuensang, then still unadministered and heavily populated. The FGN afterwards derives its entire legitimacy from this vote.",
    layer: "naga",
    location: { lat: 25.6751, lng: 94.1086, place: "Naga Hills District", approximate: true },
  },
  {
    id: "election-boycott-1952",
    date: "1952-01",
    displayDate: "Jan 1952",
    title: "Boycott of India's first election",
    description:
      "Building on the plebiscite, the Nagas abstain completely from India's first general election. Electoral abstention enters the repertoire here, and returns in almost identical form seventy-two years later in the eastern districts.",
    layer: "naga",
    location: { lat: 25.6751, lng: 94.1086, place: "Naga Hills District", approximate: true },
  },
  {
    id: "nehru-walkout-1953",
    date: "1953-03",
    displayDate: "Mar 1953",
    title: "Walkout on Nehru at Kohima",
    description:
      "Nehru visits Kohima with Burmese Prime Minister U Nu. When local administrators refuse to let NNC leaders present a petition, the Naga crowd walks out of the public meeting. The Indian government responds with the Assam Maintenance of Public Order Act and troop deployments, and the political phase of the dispute effectively ends.",
    layer: "naga",
    location: { lat: 25.6751, lng: 94.1086, place: "Kohima" },
  },
  {
    id: "phizo-underground-1954",
    date: "1954-12",
    displayDate: "Late 1954",
    title: "Phizo goes underground",
    description:
      "Facing a military crackdown, Phizo disappears into the Tuensang region and proclaims the Khunak Kautang Ngeukhuma, the People's Sovereign Republic of Free Nagaland. He raises the Naga underground army. The dispute is now an armed one and stays that way for four decades.",
    layer: "naga",
    location: { lat: 26.268, lng: 94.825, place: "Tuensang" },
  },
  {
    id: "sakhrie-killed-1956",
    date: "1956-01",
    displayDate: "Jan 1956",
    title: "T. Sakhrie assassinated",
    description:
      "The NNC General Secretary, who argued for a negotiated settlement with India, is kidnapped and killed by armed hardliners. The movement's capacity to police its own moderates is established early, and the 1956 killings of teachers and headmen suspected of loyalty to the government push others towards the constitutional track.",
    layer: "naga",
    location: { lat: 25.6751, lng: 94.1086, place: "Kohima", approximate: true },
  },
  {
    id: "yehzabo-1956",
    date: "1956-01-14",
    displayDate: "14 Jan 1956",
    title: "The Yehzabo is adopted",
    description:
      "The NNC approves a written constitution declaring Nagaland a democratic republic with permanent military neutrality, votes for women and men over twenty-two, full religious freedom, communal ownership of land and no land tax. Offices are named in Rengma, Yimkhiung and Ao: Kedahge, Kilonser, Tatar.",
    layer: "naga",
    location: { lat: 25.6751, lng: 94.1086, place: "Naga Hills", approximate: true },
  },
  {
    id: "fgn-1956",
    date: "1956-03-22",
    displayDate: "22 Mar 1956",
    title: "Federal Government of Nagaland inaugurated",
    description:
      "At Phensinyu in the Rengma region the NNC stands up the FGN as an underground state administration, with the NNC directing policy and the FGN acting as executive. A 109-member Tatar Hoho sits as its parliament. It is a functioning parallel state, and parts of it still operate.",
    layer: "naga",
    location: { lat: 25.85, lng: 94.15, place: "Phensinyu", approximate: true },
  },
  {
    id: "phizo-exile-1956",
    date: "1956-12",
    displayDate: "Dec 1956",
    title: "Phizo escapes to exile",
    description:
      "Encircled militarily, Phizo leaves through East Pakistan with help from the Baptist missionary Michael Scott, and settles in London by 1960. He directs the movement from Britain for thirty years, which leaves the field leadership permanently unsure who speaks for it.",
    layer: "naga",
    location: { lat: 51.5074, lng: -0.1278, place: "London" },
  },
  {
    id: "npc-1957",
    date: "1957",
    displayDate: "1957",
    title: "The Naga People's Convention",
    description:
      "Moderate leaders form the NPC to pursue a negotiated settlement inside the Indian Union rather than continued armed resistance. Its third session at Mokokchung in 1959 adopts the sixteen-point resolution that becomes the basis of statehood. The NNC calls the resulting government a puppet.",
    layer: "naga",
    location: { lat: 26.322, lng: 94.515, place: "Mokokchung" },
  },
  {
    id: "rgn-1968",
    date: "1968-11",
    displayDate: "Nov 1968",
    title: "The FGN fractures",
    description:
      "Defence Minister Kaito Sema had already revolted in October 1967 over the movement's Chinese alignment. Now Scato Swu and Kughato Sukhai break away to form the Revolutionary Government of Nagaland, drawing mainly on Sumi support. The RGN surrenders in 1973 and its cadres are absorbed into the Border Security Force.",
    layer: "naga",
    location: { lat: 26.01, lng: 94.52, place: "Zunheboto", approximate: true },
  },
  {
    id: "fgn-rejects-shillong-1975",
    date: "1975-12-30",
    displayDate: "30 Dec 1975",
    title: "The FGN rejects two of three clauses",
    description:
      "FGN President Zashei Huire tells Governor L.P. Singh that under the Yehzabo the FGN has no competence to settle Nagaland's political status, which rests with the NNC. It will deposit 150 weapons at Chedema in exchange for 600 political prisoners and nothing more. Phizo, in London, says nothing at all.",
    layer: "naga",
    location: { lat: 25.63, lng: 94.15, place: "Chedema Peace Camp", approximate: true },
  },
  {
    id: "supao-1976",
    date: "1976-08-15",
    displayDate: "15–16 Aug 1976",
    title: "The Socialist Ministry at Süpao",
    description:
      "Muivah and Isak, returning from a mission to China when news of the Shillong Accord reached them, convene at Süpao in the Khiamniungan region and restructure the leadership without the NNC executive's consent. Tatars become Central Committee Members and Marxist-Leninist vocabulary enters the movement.",
    layer: "naga",
    location: { lat: 26.19, lng: 95.02, place: "Süpao village", approximate: true },
  },
  {
    id: "martial-law-1978",
    date: "1978-08-30",
    displayDate: "30 Aug 1978",
    title: "Martial law in the east",
    description:
      "The Naga Army in the eastern region, under Lt. Col. Subung, suspends the Socialist Ministry and puts Muivah and Isak under house arrest. Military rule is lifted in March 1979 and a civilian FGN cabinet is elected at Lao Konyak with S.S. Khaplang as President.",
    layer: "naga",
    location: { lat: 26.5, lng: 95.1, place: "Eastern Nagaland", approximate: true },
  },
  {
    id: "executions-1979",
    date: "1979-12",
    displayDate: "Dec 1979 – Jan 1980",
    title: "The counter-coup",
    description:
      "Released and allied with Khaplang, Muivah and Isak summon senior NNC and FGN figures to reconciliation meetings, capture them and execute those refusing to adopt socialism. Vice President Thepuse Venuh, Ngathingkhui Ahum, K. Mayanger Ao and Speaker N. Lorho Mao are among the dead.",
    layer: "naga",
    location: { lat: 26.3, lng: 95.3, place: "Heimi region, Myanmar border", approximate: true },
  },
  {
    id: "nscn-founded-1980",
    date: "1980-01-31",
    displayDate: "31 Jan 1980",
    title: "The NSCN is founded",
    description:
      "Two days after signing a merger with the NNC, Muivah and Isak defect from it. Their manifesto declares that the Naga National Council has failed, pairs Nagaland for Christ with revolutionary socialism, and rejects negotiation outright: it is arms and arms again that will save the nation. The GPRN follows on 2 February.",
    layer: "naga",
    location: { lat: 26.3, lng: 95.3, place: "Heimi region, Myanmar", approximate: true },
  },
  {
    id: "expulsion-1980",
    date: "1980-09-01",
    displayDate: "1 Sep 1980",
    title: "NNC expels Muivah and Isak",
    description:
      "The joint assembly of the NNC and FGN declares both men traitors and offenders against national solidarity. The Naga movement now has two mutually delegitimising centres, and the rump NNC survives under Phizo's daughter Adino as a diminished third.",
    layer: "naga",
    location: { lat: 25.6751, lng: 94.1086, place: "Kohima", approximate: true },
  },
  {
    id: "oinam-ambush-1987",
    date: "1987-07-09",
    displayDate: "9 Jul 1987",
    title: "Ambush at Oinam Hill",
    description:
      "NSCN insurgents overrun an Assam Rifles outpost near Oinam Hill village in Senapati district, killing nine soldiers, wounding three and taking a large quantity of arms and ammunition. The reprisal that follows lasts three months and is still the reference point for AFSPA's civilian cost.",
    layer: "naga",
    location: { lat: 25.1, lng: 94.03, place: "Oinam Hill, Senapati", approximate: true },
  },
  {
    id: "nscn-split-1988",
    date: "1988-04-30",
    displayDate: "30 Apr 1988",
    title: "The NSCN splits",
    description:
      "Khaplang's cadres assault the NSCN headquarters at Hangsen in Myanmar, killing more than 200 cadres loyal to Muivah and Isak, who escape into Kachin territory. The organisation divides along tribal and territorial lines into NSCN-IM, based at Camp Hebron near Dimapur, and NSCN-K, based at Taga in Sagaing.",
    layer: "naga",
    location: { lat: 26.3, lng: 95.3, place: "Hangsen, Myanmar", approximate: true },
  },
  {
    id: "phizo-dies-1990",
    date: "1990-04-30",
    displayDate: "30 Apr 1990",
    title: "Phizo dies in London",
    description:
      "The father of the Naga nation dies in exile, having neither ratified nor condemned the Shillong Accord that split the movement fifteen years earlier. His body is flown back to Kohima. The NNC he built never recovers its position against the NSCN factions.",
    layer: "naga",
    location: { lat: 51.5074, lng: -0.1278, place: "London" },
  },
  {
    id: "nscn-u-2007",
    date: "2007-11-23",
    displayDate: "23 Nov 2007",
    title: "NSCN-Unification breaks away",
    description:
      "Sumi cadres leave NSCN-IM at Vihokhu village to press for unification among all Naga armed groups. Further splits follow: NSCN-KK in June 2011 after Khole Konyak and Kitovi Zhimomi expel Khaplang from the Indian side of the border, and NSCN-R in March 2015.",
    layer: "naga",
    location: { lat: 25.85, lng: 93.9, place: "Vihokhu village", approximate: true },
  },
  {
    id: "enpo-fnt-2007",
    date: "2007",
    displayDate: "2007",
    title: "ENPO demands Frontier Nagaland",
    description:
      "The Eastern Nagaland Peoples' Organisation, formed from the Tuensang Mon People's Organisation of 1994 and renamed around 2005, resolves to demand a separate state. The grievance dates to 1974, when Tuensang's protected status lapsed before the development gap with the west had closed.",
    layer: "naga",
    location: { lat: 26.268, lng: 94.825, place: "Tuensang" },
  },
  {
    id: "enpo-memorandum-2010",
    date: "2010-11-25",
    displayDate: "25 Nov 2010",
    title: "Memorandum to the Prime Minister",
    description:
      "ENPO formally asks Manmohan Singh to create a Frontier Nagaland Territory, at its widest including the Naga districts of Tirap and Changlang in Arunachal Pradesh. A Regional Council is offered in December and refused; four Sixth Schedule district councils are offered in 2012 and refused as well.",
    layer: "naga",
    location: { lat: 28.6139, lng: 77.209, place: "New Delhi" },
  },
  {
    id: "nscn-k-abrogates-2015",
    date: "2015-03-28",
    displayDate: "28 Mar 2015",
    title: "NSCN-K abrogates its ceasefire",
    description:
      "Khaplang unilaterally walks out of the 2001 agreement. Attacks follow, including the bombing of a security force colony in April and an ambush in Chandel district, Manipur, on 4 June that kills eighteen soldiers. India bans the group under UAPA in September and strikes its camps across the border.",
    layer: "naga",
    location: { lat: 26.3, lng: 95.3, place: "Taga, Sagaing", approximate: true },
  },
  {
    id: "isak-swu-dies-2016",
    date: "2016-06-28",
    displayDate: "28 Jun 2016",
    title: "Isak Chishi Swu dies",
    description:
      "The NSCN-IM chairman dies in Delhi, ten months after signing the Framework Agreement. Qhehezu Tuccu is elected Yaruiwo in February 2019. Muivah, general secretary since 1980 and now the movement's last founding figure, continues to hold the negotiating line on a flag and constitution.",
    layer: "naga",
    location: { lat: 28.6139, lng: 77.209, place: "New Delhi" },
  },
  {
    id: "khaplang-dies-2017",
    date: "2017-06-09",
    displayDate: "9 Jun 2017",
    title: "Khaplang dies",
    description:
      "The Hemi Naga founder of NSCN-K, who had held the Myanmar bases together since 1988, dies. His successor Khango Konyak is impeached in August 2018 by Yung Aung, Khaplang's nephew. Khango takes his Indian-origin cadres into the peace process; Yung Aung keeps the Myanmar bases and stays outside it.",
    layer: "naga",
    location: { lat: 26.3, lng: 95.3, place: "Taga, Sagaing", approximate: true },
  },
  {
    id: "enpo-boycott-resolution-2022",
    date: "2022-08-26",
    displayDate: "26 Aug 2022",
    title: "ENPO resolves to boycott",
    description:
      "ENPO votes to boycott the February 2023 assembly election unless its demand is met, calls on all twenty eastern MLAs to resign, and the students' federation stages a mass walkathon. Amit Shah's pre-poll assurance gets the call withdrawn and all twenty seats are contested.",
    layer: "naga",
    location: { lat: 26.268, lng: 94.825, place: "Tuensang" },
  },
  {
    id: "chenmoho-2024",
    date: "2024-02-23",
    displayDate: "23 Feb 2024",
    title: "The Chenmoho Resolution",
    description:
      "With the promised settlement still not delivered two months after the Home Ministry's deadline, ENPO resolves to boycott the Lok Sabha election across the six eastern districts. The resolution is adopted publicly and enforced through the village councils rather than through any armed body.",
    layer: "naga",
    location: { lat: 26.268, lng: 94.825, place: "Chenmoho, Tuensang", approximate: true },
  },
  {
    id: "zero-turnout-2024",
    date: "2024-04-19",
    displayDate: "19 Apr 2024",
    title: "Zero votes in six districts",
    description:
      "Polling for Nagaland's single Lok Sabha seat records no votes at all across 738 polling stations in Mon, Tuensang, Kiphire, Longleng, Noklak and Shamator. Twenty of sixty assembly segments return nothing. The boycott extends to the urban local body polls in June.",
    layer: "naga",
    location: { lat: 26.268, lng: 94.825, place: "Eastern Nagaland" },
    plate: "lok-sabha-2024-boycott",
  },
  {
    id: "enpo-accepts-2024",
    date: "2024-12-13",
    displayDate: "13 Dec 2024",
    title: "ENPO accepts, temporarily",
    description:
      "At a tripartite meeting in New Delhi the Union government offers an arrangement carrying executive, legislative and financial autonomy for the six districts, short of statehood. ENPO accepts on a temporary basis while formally recording that its objective remains a separate state.",
    layer: "naga",
    location: { lat: 28.6139, lng: 77.209, place: "New Delhi" },
  },

  // ==========================================================
  // INDIAN OFFICIAL
  // ==========================================================
  {
    id: "disturbed-areas-1955",
    date: "1955",
    displayDate: "1953–55",
    title: "Security legislation arrives",
    description:
      "The Assam Maintenance of Public Order Act of 1953 is followed by the Assam Disturbed Areas Act of 1955, and police and army units are deployed into the Naga Hills. The legal category of the disturbed area, which still governs most of the state, is established here.",
    layer: "indian",
    location: { lat: 26.1445, lng: 91.7362, place: "Assam" },
  },
  {
    id: "nhta-1957",
    date: "1957-12-01",
    displayDate: "1957",
    title: "Naga Hills–Tuensang Area formed",
    description:
      "The Naga Hills District of Assam is joined to the Tuensang Frontier Division of the North-East Frontier Agency to form a single centrally administered unit. It brings the unadministered east inside the system for the first time and defines the territory that becomes the state six years later.",
    layer: "indian",
    location: { lat: 26.0, lng: 94.5, place: "Naga Hills–Tuensang Area" },
    plate: "nefa-1957",
  },
  {
    id: "afspa-1958",
    date: "1958-09-11",
    displayDate: "11 Sep 1958",
    title: "AFSPA receives assent",
    description:
      "Piloted by Home Minister G.B. Pant and modelled on Linlithgow's 1942 ordinance against the Quit India movement, the Act gives the armed forces power to use lethal force on suspicion and near-total immunity from prosecution. It applies at first only to the Naga Hills and Manipur; the 1972 amendment extends it across the north-east.",
    layer: "indian",
    location: { lat: 28.6139, lng: 77.209, place: "Parliament, New Delhi" },
    plate: "afspa-districts",
  },
  {
    id: "sixteen-point-1960",
    date: "1960-07-26",
    displayDate: "26 Jul 1960",
    title: "The Sixteen-Point Agreement",
    description:
      "Nehru concludes an agreement with an NPC delegation including Imkongliba Ao, John Bosco Jasokie and S.C. Jamir, providing for a new state under the Ministry of External Affairs with guarantees for customary law. The NNC and the armed underground had no part in it and call it the greatest betrayal.",
    layer: "indian",
    location: { lat: 28.6139, lng: 77.209, place: "New Delhi" },
  },
  {
    id: "article-371a-1962",
    date: "1962",
    displayDate: "1962",
    title: "Article 371A and the State of Nagaland Act",
    description:
      "The Thirteenth Amendment inserts Article 371A, barring any Act of Parliament on Naga customary law, religious and social practice, or land and its resources from applying without the state assembly's consent. The State of Nagaland Act then does the administrative work of creating the state itself.",
    layer: "indian",
    location: { lat: 28.6139, lng: 77.209, place: "Parliament, New Delhi" },
  },
  {
    id: "statehood-1963",
    date: "1963-12-01",
    displayDate: "1 Dec 1963",
    title: "Nagaland becomes a state",
    description:
      "India's sixteenth state is constituted from the Naga Hills–Tuensang Area, with three districts and a transitional arrangement placing Tuensang directly under the Governor for ten years. The NNC and FGN reject its legitimacy and step up guerrilla operations, producing a state and an insurgency on the same ground.",
    layer: "indian",
    location: { lat: 25.6751, lng: 94.1086, place: "Kohima" },
  },
  {
    id: "first-election-1964",
    date: "1964-02-11",
    displayDate: "Feb 1964",
    title: "First assembly, first Chief Minister",
    description:
      "All 73 candidates contest the January election as independents, since no party had been registered by nomination day, and sort themselves into parties afterwards. P. Shilu Ao of the NNO takes office on 11 February. He loses a confidence vote in August 1966, setting the pattern for floor-level politics in the state.",
    layer: "indian",
    location: { lat: 25.6751, lng: 94.1086, place: "Kohima" },
  },
  {
    id: "ceasefire-1964",
    date: "1964",
    displayDate: "1964",
    title: "Ceasefire with the FGN",
    description:
      "The Nagaland Baptist Church Council and a Peace Mission of B.P. Chaliha, Jayaprakash Narayan and Michael Scott broker a ceasefire between the Government of India and the FGN. Six rounds of prime ministerial talks follow in 1966 and 1967, collapsing over Indian allegations that cadres were training in Pakistan and China.",
    layer: "indian",
    location: { lat: 25.6751, lng: 94.1086, place: "Kohima" },
  },
  {
    id: "ceasefire-abrogated-1972",
    date: "1972-08-31",
    displayDate: "31 Aug 1972",
    title: "Ceasefire abrogated, NNC banned",
    description:
      "The Government of India ends the 1964 ceasefire, outlaws the NNC, the FGN and the Naga Army under the Unlawful Activities (Prevention) Act, and begins sustained counter-insurgency operations with village grouping. The same year's AFSPA amendment extends the Act across the north-east and lets the Centre notify disturbed areas over a state's objection.",
    layer: "indian",
    location: { lat: 28.6139, lng: 77.209, place: "New Delhi" },
  },
  {
    id: "tuensang-lapses-1974",
    date: "1974",
    displayDate: "1973–74",
    title: "Tuensang's protection lapses",
    description:
      "The ten-year special dispensation expires and Tuensang becomes an ordinary district, losing its Regional Council and separate minister. Mon is carved out in December 1973, Kiphire and Longleng in 2003, Noklak in 2021 and Shamator in 2022. Eastern Naga leaders date the present statehood demand to this moment.",
    layer: "indian",
    location: { lat: 26.268, lng: 94.825, place: "Tuensang" },
  },
  {
    id: "shillong-accord-1975",
    date: "1975-11-11",
    displayDate: "11 Nov 1975",
    title: "The Shillong Accord",
    description:
      "Governor L.P. Singh signs with five men described only as representatives of the underground organisations, avoiding any mention of the NNC or FGN. They accept the Constitution of India without conditions and agree to surrender arms by January 1976. The wording is what destroys it: nobody can say who was bound.",
    layer: "indian",
    location: { lat: 25.5788, lng: 91.8933, place: "Shillong" },
  },
  {
    id: "operation-bluebird-1987",
    date: "1987-07-11",
    displayDate: "11 Jul 1987",
    title: "Operation Bluebird",
    description:
      "Two days after the Oinam ambush, the Assam Rifles seal Senapati district for three months. Twenty-seven civilians are killed, over 300 tortured, 125 houses burned and ten churches turned into detention centres. Manipur's Chief Minister is denied landing clearance to visit. The arms are never recovered, and the case record later goes missing.",
    layer: "indian",
    location: { lat: 25.268, lng: 94.027, place: "Senapati district, Manipur" },
  },
  {
    id: "ceasefire-im-1997",
    date: "1997-08-01",
    displayDate: "1 Aug 1997",
    title: "Ceasefire with NSCN-IM",
    description:
      "Announced to Parliament by I.K. Gujral, the ceasefire suspends operations on both sides and sets up monitoring groups and designated camps. Over a hundred rounds of talks follow, many held in Bangkok, Amsterdam, Geneva and Zurich. It has been renewed continuously and is still in force.",
    layer: "indian",
    location: { lat: 25.9063, lng: 93.7276, place: "Dimapur" },
  },
  {
    id: "ceasefire-k-2001",
    date: "2001-04-28",
    displayDate: "28 Apr 2001",
    title: "Ceasefire with NSCN-K",
    description:
      "A parallel one-year agreement is signed with Khaplang's faction and the ban on the organisation lifted. It is renewed periodically for fourteen years, giving the government simultaneous arrangements with two hostile factions operating on opposite sides of the Myanmar border.",
    layer: "indian",
    location: { lat: 26.268, lng: 94.825, place: "Eastern Nagaland", approximate: true },
  },
  {
    id: "bangkok-2001",
    date: "2001-06-14",
    displayDate: "14 Jun 2001",
    title: "Ceasefire extended without territorial limits",
    description:
      "Indian representatives and NSCN-IM sign in Thailand, extending the ceasefire without territorial limits. In Manipur the phrase is read as tacit recognition of the Nagalim claim over the state's hill districts and as the first step towards partition.",
    layer: "indian",
    location: { lat: 13.7563, lng: 100.5018, place: "Bangkok" },
    plate: "naga-areas-region",
  },
  {
    id: "great-june-uprising-2001",
    date: "2001-06-18",
    displayDate: "18 Jun 2001",
    title: "The Great June Uprising",
    description:
      "Hundreds of thousands march on Imphal and burn the assembly secretariat, the Congress Bhavan and the Speaker's residence. CRPF personnel open fire on the crowds, killing eighteen civilians and injuring more than fifty. On 27 July New Delhi withdraws the clause and confines the ceasefire to Nagaland.",
    layer: "indian",
    location: { lat: 24.817, lng: 93.9368, place: "Imphal" },
  },
  {
    id: "framework-2015",
    date: "2015-08-03",
    displayDate: "3 Aug 2015",
    title: "The Framework Agreement",
    description:
      "Signed in New Delhi before Narendra Modi after eighteen years of ceasefire and more than eighty rounds of talks. The text has never been published. What is known of it recognises the unique history and position of the Nagas and speaks of shared sovereignty, a phrase the two sides have since read in incompatible ways.",
    layer: "indian",
    location: { lat: 28.6139, lng: 77.209, place: "New Delhi" },
  },
  {
    id: "agreed-position-2017",
    date: "2017-11-17",
    displayDate: "17 Nov 2017",
    title: "The Agreed Position",
    description:
      "The government signs a second track with the Working Committee of seven Naga National Political Groups, recording recognition of Naga political and historical rights and a settlement based on acceptance of the Constitution. Neither agreement has been abrogated and neither has produced a settlement, and the two tracks have never been reconciled.",
    layer: "indian",
    location: { lat: 28.6139, lng: 77.209, place: "New Delhi" },
  },
  {
    id: "assembly-2023",
    date: "2023-02-27",
    displayDate: "27 Feb 2023",
    title: "The 2023 assembly election",
    description:
      "The NDPP–BJP alliance takes about 37 of 60 seats. Hekhani Jakhalu and Salhoutuonuo Kruse become the first women elected to the assembly in sixty years of statehood. The remaining opposition then joins the government, producing an assembly with no opposition for the third time.",
    layer: "indian",
    location: { lat: 25.6751, lng: 94.1086, place: "Kohima" },
    plate: "assembly-2023",
  },
  {
    id: "municipal-act-2023",
    date: "2023-11",
    displayDate: "2023",
    title: "Municipal Act reserves a third of seats",
    description:
      "The assembly unanimously passes the Nagaland Municipal Act, reserving 33 percent of urban local body seats for women. The consensus took more than a decade and the violent crisis of 2017 to build. The first municipal polls follow in June 2024, with high turnout everywhere except the six eastern districts.",
    layer: "indian",
    location: { lat: 25.6751, lng: 94.1086, place: "Kohima" },
  },
  {
    id: "mha-offers-fnt-2023",
    date: "2023-12-07",
    displayDate: "7 Dec 2023",
    title: "Home Ministry offers Frontier Nagaland",
    description:
      "The Ministry of Home Affairs proposes a Frontier Nagaland Territory arrangement and shares draft settlement highlights with the Chief Minister, seeking a response by the end of the year. ENPO treats it as an assurance rather than a settlement, and objects to the ambiguity over who authored the draft.",
    layer: "indian",
    location: { lat: 28.6139, lng: 77.209, place: "New Delhi" },
  },
  {
    id: "ndpp-npf-merger-2025",
    date: "2025-10-19",
    displayDate: "19 Oct 2025",
    title: "NDPP merges back into the NPF",
    description:
      "The party Rio split away from in 2017 absorbs the party he built, and he is elected president of the reunified NPF with about 34 of 60 members. Framed as Naga political unity, it also folds a hollowed-out organisation into the dominant one under a single leader.",
    layer: "indian",
    location: { lat: 25.6751, lng: 94.1086, place: "Kohima" },
  },
  {
    id: "fnta-moa-2026",
    date: "2026-02-05",
    displayDate: "5 Feb 2026",
    title: "Frontier Nagaland Territorial Authority agreed",
    description:
      "A tripartite Memorandum of Agreement is signed at Kartavya Bhawan by the Union government, the state and ENPO. The FNTA gets legislative and executive power over 46 devolved subjects, 40 elected and 9 nominated members, and a central package reported at about ₹5,000 crore over ten years. Article 371A and the state's boundaries are expressly untouched.",
    layer: "indian",
    location: { lat: 28.6139, lng: 77.209, place: "Kartavya Bhawan, New Delhi" },
  },
  {
    id: "fnta-bill-deferred-2026",
    date: "2026-03-26",
    displayDate: "26–27 Mar 2026",
    title: "The FNTA Bill is deferred",
    description:
      "Deputy Chief Minister Y. Patton introduces the Bill with an initial grant of ₹100.57 crore. Passage is deferred after questions over whether a state legislature may delegate legislative power to a subordinate authority, with the Solicitor General's opinion sought, and after ENPO itself objects that provisions of the February agreement had been diluted.",
    layer: "indian",
    location: { lat: 25.6751, lng: 94.1086, place: "Nagaland Legislative Assembly, Kohima" },
  },
  {
    id: "fnta-revised-2026",
    date: "2026-09-01",
    displayDate: "Sep 2026",
    title: "The revised Bill returns",
    description:
      "A redrafted FNTA Bill, addressing the Advocate General's objections on conferring legislative power, is listed for the assembly session beginning 1 September. Seventy-nine years after the declaration of independence, the Naga political settlement itself remains open, and the eastern districts are being settled separately.",
    layer: "indian",
    location: { lat: 25.6751, lng: 94.1086, place: "Kohima" },
  },
];

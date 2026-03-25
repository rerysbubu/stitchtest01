import { Artist, Concert, Post, Review, Message } from './types';

export const ARTISTS: Artist[] = [
  {
    id: '1',
    name: 'BTS',
    fandom: 'ARMY',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDl6WCPCdovNs3pgnhT8PkDRntXri1YaeMLys6vsDWXFXfglQUdq_X0XPZlpFipkNhFvQ-dUFmQRVxddPmX6i4bUITbwfICp3CCeRRUpV2wpEF5SJf4sN098kDL-an64bmobhC2RmSVtMhbJQfl0NNRimdMMqQh4nD-aCrNDE7spNbcHvBDF06Fg9PnQr-RpvemBBibLENRGUn5QZrOJ3cL0fKEqxGPFi536xT1TvNBSMuBE4LZgenpMcYAN_HpTJd_7a9g7njR8506',
    color: '#ff83d5'
  },
  {
    id: '2',
    name: 'BLACKPINK',
    fandom: 'BLINK',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGwfykuYdlGQuzqxgNfCd6TnWCiWFVYEZQEuRaarTz_6k_g_njNwaJ8NfMAxMAN72ZxxyZUd-ORi8RUTdQ3bYP71K0sIjq0fFpZhCxeksfpJ18NuQNiv7-brAQpnyAXYzd207aDD1U88PQlFxa8KdqAwtKPaC5UrAi6bxCj4plaaFq8aTpzig-ARLBHKcWO9jjeNn_vjNVjAmqkQbCrcQ30OG1xufwTgiaHEO_apAQSegX3z-O_dRDEQ9I24Webl95uvnJ51OGKIiO',
    color: '#ff83d5'
  },
  {
    id: '3',
    name: 'NewJeans',
    fandom: 'BUNNIES',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6dHCoYo178M8pQSiKUho5efOgGQc-28iuXFLI-dKhrp4QXLgTOeCquxNzP4NdfDKyK0DE2j3H6Rn9FR3iBK_34NOyHPv1R6MyMi9R-dYmxph8iWeCwPvpDwi3c_IeFbPslv_OP3gcOoL84fsAzpB9gceqzRSBQeNrXFcW_XJEte82sT4Lw3i0La8lgKgNRePCuryqIat60-Gu6iSOXJvLDunlhnN4XUyTsnZqOw1fTkpDNmHnje_Uzh9lsL1T_vRzbnbueVSaXBY5',
    color: '#15ffd1'
  },
  {
    id: '4',
    name: 'TWICE',
    fandom: 'ONCE',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAi4q0oSWRKdFmUp7qZEg9ATeNLvLGk_DfCkaEfGSqBNeLzu6zF8awBP3jtPQllZliTcZO7AU7e-tJkefs8OrhlBY_g0XQnYH6jvDw6_haEZnaT4Z3ll04U6CslkXGYxJgwlSxDe6PI6jKPruOZvEkddYcmKHvil9oj2OKZ5Kp35C1vSGwO8q2R_0b1IH55p8NZSgLxVPlQ49N9mQKh62aAwkWqEOODMNKzuP_F8xP3FcMNtUDAoAVdSzanwDptHsvc-MzZrDSwQRKK',
    color: '#15ffd1'
  },
  {
    id: '5',
    name: 'Stray Kids',
    fandom: 'STAY',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEjKn0gjqWG5j4HsRY8HfgfDzFEXPytfWl4t7RfI9uj5BGZs57u9qHIvX_jrUc-HyVmpFk7Bu1aRShkkngHLr9ZwV-0q7o_m8f73BuBRUdIExdeKX5L428UXq-f_L2X7n_CheArlM-kipPIMe6GtLrwUbGXndUfjfvMw99Sg0NEm3-M0vFKGz-zr12PJ5Svom0TkdaUouTaWO43C3gIu8rH0s1DidDNGZr-U7D-xYTS1i0666g6CpsEPig0CdTes2zDijXLJpnmOcc',
    color: '#15ffd1'
  },
  {
    id: '6',
    name: 'IVE',
    fandom: 'DIVE',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBc3m8baYl5xx90MZcKN14t-smS7G2qhCVcko00KUvliDTCtuQCdPwT8I5nlwZfMC3rtktrktai82F1f8t8WI1lmK85V0SK_NG6UT-mBLwF2o2A-qSH0-qbdpKIixRDzFCZLxGeFVbyksZutZUOvtqeFv51v7VNZrHyYn0JFIvD9OgoHxngsxy40tSssIAW1-CKuhpqh0G-SaSmR3sJgn66oq7LxwsV6U2-MvlFXwV9q3n0K32ZbgRYWGA-4F6Dxx17gZVOpmK7cGsq',
    color: '#15ffd1'
  }
];

export const CONCERTS: Concert[] = [
  {
    id: 'c1',
    title: 'Born Pink World Tour',
    artist: 'BLACKPINK',
    date: 'Oct 24, 2024',
    location: 'Seoul, SK',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpfKDOaGNwkjCNXQ6IehCkQ7dsYy4mwkQ2CJ9_nlF-l3FxSAYFENwYWmMyW1wB29PMPlJUZkBuRz4knFFIfHAPibEQ-2-s5O66_UmgrILDnEep6jg0cHCuAsYzrE5T24oVuQLEiW1cs_5kP8yTq-CaMvV8tdhVFK_pJa7JBqlK9Vzl7qrC3ocTJlLunAcIyVMEc4414Mkvn0Z-x8wumY5Cr8ZsITzbIo0LMa7iCs_xJOHdpj__kKNUWSluVoq4BigHCRmO5GYuFPw-',
    attendees: 845,
    trending: true
  },
  {
    id: 'c2',
    title: 'Agust D Tour',
    artist: 'Suga of BTS',
    date: 'Nov 12, 2024',
    location: 'Osaka, JP',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAg4DtfrMOFZJ-RGWMC23OCuMkWQXJXCm2JhiCPoCDjc8A8z7hyKur9otYi-NooI0SLqGyvBADXXz2gGMq3CnkHLhKY0dv_euSDEM_jUeSZE2-7gcPhMHvH_LyA1kxv-QfPgu0ZHBaF7tckQo1280lRYFdwU2tNwIgbVFEHvr4fRM3BjH_gH_kSXbJLuLQQn0BFfF77fpzZsCn-13v624ecSqhMkm3HTKsd7ON9d1qnt6L1Ghay_JxVk5kB7fDZq-uKit8_EplWvr-D',
    attendees: 1200
  },
  {
    id: 'c3',
    title: 'The Dream Show 3',
    artist: 'NCT Dream',
    date: 'Dec 05, 2024',
    location: 'Bangkok, TH',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7oK8EHz_ZdAAEB1xfZTf7-6aCGRPJg8VHeiw0KcEypN2ikwNYr-K1pTU77P44s-G6-hXBZFvMIm8O4a6K8EN6yr37oHNW-_X6RRH3h7hIU9a0Vwq-It1YX2D-UPHGlO5zgJIQrStATB1mf7AZ8bk1DqOu1m4WAMDm9OqGu2bekIXX9I1uYRZE0-4Yh78nAZqO_AZIX1f8D2FGEFKsGcUjjJcT31tjWhMO767It0k5tQv60g-uykxMLqqvxwI4TeswvVgD7fGsH74c',
    attendees: 450
  },
  {
    id: 'c4',
    title: 'H.E.R. World Tour',
    artist: 'IU',
    date: 'Nov 30, 2024',
    location: 'Taipei, TW',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtJCfaerInnejTO7IH04B4nHdORzpVOsB_iUC4YB6WnwWuvmU1iKcxEHBUWvWlI3WkWW99HSmb0yDFWKtlMGRhg_FxJCSnhNM1g-z7JWn2t4vbQzOBxm1QztDNTifWyTm4rqgO53IVMTBXy_MDVUlzXQCkFJJAKSbYfoNjG_xYUrscLc2t5WS60AANExJtkSdf4FLwZovqG0j6X97L0AdolhrmYtyEV2nY5iAIt2qsNJNFzn7mbJxnjKGws-bb-ia9YtD1XRZZjR6t',
    attendees: 2100
  }
];

export const POSTS: Post[] = [
  {
    id: 'p1',
    user: 'borahae_jin92',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKLwKiVvMWZnb6bD1Vw4KtTR3ArTQak6CWOmrVagg5ERigxJHpmsnkEAGNrjA_HG-rtAEa3TqgnSDoByEbT39V8_LuL0Y2achbFUuPZNIMASUGp0-nG68doWDCZGBjMVknJksXaSVHWDM43luA4AhjCE5fBKVLgEt2ZKn1FnXsSNGhFGYWjupusTayHixxO4JaobFY0vuMeIrM-2ysdh0sv7gVViw7bhC-vq7w-5oTWaM-ISED_qZ_ZswDWl2Su_I1gUgMuyXScrdv',
    time: '2 hours ago',
    location: 'SoFi Stadium',
    content: "Anyone going to the LA show on Nov 12th? Looking for floor seats buddies! I'm in Section A2. Let's make a group chat and coordinate outfits! ✨💜",
    comments: 24,
    likes: 142,
    isVip: true,
    tag: 'LFG'
  },
  {
    id: 'p2',
    user: 'hobi_core_vibe',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtThu-BRhofqq0qLFb3dl74yTTttkOIjBuvQI_1vvMOTDVKVtRd0NhucQUB5l0reRS11ymef7J790nOgpQQjNnFMbYV2I68o3eD4HVKIKiwvn4Jkh06p9iqsqebzLczBnFbm7nmSVt_7dEKSFhu-O5gcCRAQhrZKNbqUvJmEV9BFkdFf254u40zW_urBBR06EdbXVtVzQC-PqfEnXZdvo4eeQ7M4cKMMKURQeiDYFzw934Zfjs3hHe81xvqh4Rsn7NwB1V7L-_sDUB',
    time: '5 hours ago',
    location: 'London O2',
    content: "Flying in from Berlin for the London show! Solo traveler looking for some ARMY friends to grab dinner with before the show. Staying near the venue. 🐨🌿",
    comments: 8,
    likes: 56,
    tag: 'LFG'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    user: 'HobiVibes',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCeFC94Xx4SgTcBjBnfL421CG67g11Wul1Ez-KwALi8EEEWK0AYuNoelOgRMtJZKsOntV2Z7PkxqkyZEVpzmrns7iIeehFDYcEl88sunFrcFmjYrb4cU6V4vuPBwULOliAn06qIZ29bdNgFLI-WQsJZvtwp-OrjL2CiW4cWDcwgjDTBe834ZTmy_S8S42785Rcgau8bRR41CTC1AnRGdGS7oHoIUgYp0gEZpWsmyMvrijQkw18qME05F_HgX0lJFVMtaEm7C_coDsVw',
    rating: 5,
    time: '2 DAYS AGO',
    content: '"The best concert buddy! She knew all the fanchants and shared her snacks. Would definitely queue for 5 hours with her again!"',
    borderColor: '#15ffd1'
  },
  {
    id: 'r2',
    user: 'KookieMonster',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIwGXFkAfJYN4RoAi3jjim7phSEuF9QoD9aASXbesj4KZ6W1s-G6XCh9f818jhx-bSPAxlQ0EHiRUeaNTgqF4rDcodAh2DGhAS19Op1_PqDx02iU6trkLADxVqnVomVG0749Sn1JIvpNA5rdVDygqAgKHGW7SGimsOAEsrGkNKSzDNhx16h-F3M4ipFd_v8hqNnTPnT_JgMECaU1cUyVRn3sKiYLuCkzFA93UdIP0uu-qdzU2vSWpfFq-w1yDS_CnWIEJOmo82aYQy',
    rating: 4,
    time: 'LAST MONTH',
    content: '"So organized and fun! She helped me find the merch booth when I was lost in the crowd. True ARMY spirit!"',
    borderColor: '#ff83d5'
  }
];

export const MESSAGES: Message[] = [
  {
    id: 'm1',
    sender: 'them',
    text: 'Hey!! Did you manage to get tickets for the VIP Floor B section? I just secured mine! 💜',
    time: '10:42 AM'
  },
  {
    id: 'm2',
    sender: 'me',
    text: "OMG YES! I'm in Section B too, row 12! We're practically neighbors. I'm literally shaking right now 😭✨",
    time: '10:44 AM'
  },
  {
    id: 'm3',
    sender: 'them',
    text: "That's perfect! We need to coordinate outfits. I was thinking of going full \"Yet to Come\" aesthetic. What do you think of this for the custom jacket?",
    time: '10:46 AM'
  },
  {
    id: 'm4',
    sender: 'them',
    text: '',
    time: '10:46 AM',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLHLVXkpYdUJGWvjT0CcFhXGN234lTZuIAFpBviShLBQGsKFWhmSfSC2WnpWmnj8HmwYR8OgN4I9Mka5QaQ4FGhWJWw0hYKkhKXNHO8uzL6hcJSAt_47YDo4yxYejcj2XX63LW4avq735cPgQHP27LYUPAX9fwFjP_pWzPZfo6cdGSETEx94E4Mz9WunsB2Z9lbjJJ0YV1hoa9wORke3pgKpTkKSf21x6-rQNpkv7rxTc9FoKoPoez_VoCa7vlIZLceGC1-BDh5S1u'
  },
  {
    id: 'm5',
    sender: 'me',
    text: "That jacket is EVERYTHING. I'm doing a silver holographic skirt to match the stage lights! 💿",
    time: '10:48 AM'
  }
];

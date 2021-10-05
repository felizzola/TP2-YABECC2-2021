// EJERCICIO
// 1. LoadUsers (cargar masivamente en una collection user en mongodb)
db = db.getSiblingDB('sample_tp2');
db.users.drop();
db.users.insertMany(
    [
        {
            name: "Joffrey Baratheon",
            email: "jack_gleeson@gameofthron.es",
            password: "$2b$12$fIYLjRg5tZcTcqy30.MJLO4JRblLhsIhFwYTgUpFBbvnf9S4ONbtW"
           },
           {
            name: "Petyr Baelish",
            email: "aidan_gillen@gameofthron.es",
            password: "$2b$12$qM.YvmiekyYYY7p7phpK3OicbRCDkN7ESwYAnG/o9YnfHC0Mhkmbi"
           },
           {
            name: "Roose Bolton",
            email: "michael_mcelhatton@gameofthron.es",
            password: "$2b$12$JWXzYGip0vvuT40B23mZB.KKoHocgoW2FshxzmhDstZqR23vEtZpS"
           },
           {
            name: "Rickon Stark",
            email: "art_parkinson@gameofthron.es",
            password: "$2b$12$LKBf/wrMe29RwjUCkm6sq.AfuAXshbX6Evys3twd9vaGEsEm6YBqC"
           },
           {
            name: "Andrea Felizzola",
            email: "felizzolandre@gmail.com",
            password: "fruit"
           },
           {
            name: "Lancel Lannister",
            email: "eugene_simon@gameofthron.es",
            password: "$2b$12$mNWiHoOqOWQser3s6ezqZeTU5vhskTq.K7xkeTA2P.CIfoWsHvonO"
           },
           {
            name: "Maester Luwin",
            email: "donald_sumpter@gameofthron.es",
            password: "$2b$12$K9m5hh0Lh.NtYqRpxF40NeWTRwOM7nPp4NJL5v/9fZZ/vpIWKN3KO"
           },
           {
            name: "Jason Hernandez",
            email: "jason_hernandez@fakegmail.com",
            password: "$2b$12$fmvh3F8TRhntCXSCTb/oG.MJlZmXwStdf/UfCSFnSxSsbJb0Bsmwi"
           },
           {
            name: "Phillip Collins",
            email: "phillip_collins@fakegmail.com",
            password: "$2b$12$3XQmnWfaMh9bwJMXAdJLheLLiU7bCVATlDsdo4BREnIQFbfCxUOcK"
           },
           {
            name: "Bradley Brooks",
            email: "bradley_brooks@fakegmail.com",
            password: "$2b$12$YvZMPevRPXozhmujYwhFe.oTEHhdvHrJEviyXaXUjLsDr6tkHBoC."
           },
           {
            name: "Ygritte",
            email: "rose_leslie@gameofthron.es",
            password: "$2b$12$knwl2v71.oOhFA1W.Yenle8kil56LqhWCOvM7/JVy8E5YrOoZisUi"
           },
           {
            name: "Gendry",
            email: "joe_dempsie@gameofthron.es",
            password: "$2b$12$ctQymjuvXC5dQXYTWX695eJ/0IEXLfXhNiuzad0bL7j8n9YCBq92K"
           },
           {
            name: "Ramsay Bolton",
            email: "iwan_rheon@gameofthron.es",
            password: "$2b$12$a5CtSXflNAlkWDVmC70vN.06Zds9s3VlnvSVLNM4quXNkF5spOCsa"
           },
           {
            name: "Meera Reed",
            email: "ellie_kendrick@gameofthron.es",
            password: "$2b$12$SdyXPBMdGScx6DePpPawFeOqcpiwjdHAuTXaPl0mkvWeLzZk6EWTi"
           },
           {
            name: "Javier Smith",
            email: "javier_smith@fakegmail.com",
            password: "$2b$12$ce2znqUW43.BjKQaTS5tiekhqZuCLQHOguozLkVm4P.WM8VlrEhPe"
           },
           {
            name: "Lisa Rasmussen",
            email: "lisa_rasmussen@fakegmail.com",
            password: "$2b$12$HHK6sMwGNXZlOHOpFXcHpuS3qS8/XA2202y7ZIlTJ.6y5E6SUl7Yy"
           },
           {
            name: "Mrs. Ariana Nunez",
            email: "mrs._ariana_nunez@fakegmail.com",
            password: "$2b$12$KN9tlEa1K65zgHHG7zh2KePPpU0/NC1o/WN3RoIOaHBvWEoPq2DMC"
           },
           {
            name: "Christopher Robinson",
            email: "christopher_robinson@fakegmail.com",
            password: "$2b$12$Bop6XQ2mLRjsMXPjKUEtcuIw9751lV.cKj/eXM1ZwSetsku3sa04W"
           },
           {
            name: "John Rice",
            email: "john_rice@fakegmail.com",
            password: "$2b$12$Yg0bT/yCT5fX8xn.D4Fj3.slpd7tccYWKgRGghrLglX5Faz6Fb86G"
           },
           {
            name: "Sandor Clegane",
            email: "rory_mccann@gameofthron.es",
            password: "$2b$12$DKIKOBMbN76vskkRyJ1AjuELigfnx.SeG8vu73k24kfMcO637bSqa"
           },
           {
            name: "The High Sparrow",
            email: "jonathan_pryce@gameofthron.es",
            password: "$2b$12$wWkC3fCEuI5X1WoXJft0hOu2qm95MKVmI996/68kXBRUn0HXHebHC"
           },
           {
            name: "Gilly",
            email: "hannah_murray@gameofthron.es",
            password: "$2b$12$s6/CDf3HFLl3sYNVdOs8sOvdR7HOeQln/ByVQwDGRyTOH5S6qlI7m"
           },
           {
            name: "Daario Naharis",
            email: "michiel_huisman@gameofthron.es",
            password: "$2b$12$22Oqs3Wq.ObJ3Vr68TJKteCSEV1JWIt8jM7/3lf21vOA.jQkdHoBq"
           },
           {
            name: "Meryn Trant",
            email: "ian_beattie@gameofthron.es",
            password: "$2b$12$rB95MlNcAdrflKD1gUdiTOg55dbPUtH6po4kKMHGxQjbU9L4k0LBu"
           },
           {
            name: "Rodrik Cassel",
            email: "ron_donachie@gameofthron.es",
            password: "$2b$12$dIvO2KpkHkje98eMZg.exuDR.MeOkHlRC9R7PTKj1D66PhX4NaDP6"
           },
           {
            name: "Maester Aemon",
            email: "peter_vaughan@gameofthron.es",
            password: "$2b$12$uOefAK8L28vlzZ9lsZV2Q.LplAND.FPwKHPmZ7wgXeO/F0mbVR1b2"
           },
           {
            name: "Yara Greyjoy",
            email: "gemma_whelan@gameofthron.es",
            password: "$2b$12$q4rJ2PG4ZJZ1c9PNJeZU1uHH/ckwCh4P0xfu6lGgHIQ8/ugptuQuK"
           },
           {
            name: "Connie Johnson",
            email: "connie_johnson@fakegmail.com",
            password: "$2b$12$tA3NXW5mHAru7YbIrW6x3.T3OweDVjBwk6wf/ukXBiwxAZXi3R5m2"
           },
           {
            name: "Denise Davidson",
            email: "denise_davidson@fakegmail.com",
            password: "$2b$12$kjWPMnQwGlwe7NGI0NdE9uq3KGvJ8jA0bJILkEUXFE9tzPVjwzJ1a"
           },
           {
            name: "Lisa Silva",
            email: "lisa_silva@fakegmail.com",
            password: "$2b$12$K8ZpLpGQUUFev/fxmJSlueIdVJ3.7CNYRNERCRae5B1auB7SLBTu2"
           },
           {
            name: "Catherine Romero",
            email: "catherine_romero@fakegmail.com",
            password: "$2b$12$XVWuCkFmEypxLhpe6OnZdeZ2HcO/mD.q0bcDun5izEPMDCSTGW5AO"
           },
           {
            name: "Grand Maester Pycelle",
            email: "julian_glover@gameofthron.es",
            password: "$2b$12$R2KQQQMmjcrbm5XgGdkFJ.38e0I7KptV479H2p1UJ2t5TTb3OSww6"
           },
           {
            name: "Barristan Selmy",
            email: "ian_mcelhinney@gameofthron.es",
            password: "$2b$12$IabcnI3C6lUTfq2Ez5f0bOEsM6Hok6JsPMyTxnVHwZGIEaHtpohsy"
           },
           {
            name: "Ronald Cox",
            email: "ronald_cox@fakegmail.com",
            password: "$2b$12$HhDeE1teAaNqj2Mrfn4f2O57K8z6kVVqtCEr.7Qc5BZR69H6XwRlK"
           },
           {
            name: "Karina Martin",
            email: "karina_martin@fakegmail.com",
            password: "$2b$12$s6XOIsF9p9/p6tZd0nZ1ee5qd6/nc5sL8dd0iES0ZEJySgacjcqD."
           },
           {
            name: "Mercedes Tyler",
            email: "mercedes_tyler@fakegmail.com",
            password: "$2b$12$ONDwIwR9NKF1Tp5GjGI12e8OFMxPELoFrk4x4Q3riJGWY6jl/UZAa"
           },
           {
            name: "Denise Bryant",
            email: "denise_bryant@fakegmail.com",
            password: "$2b$12$Dcm7ncpCt0PVR4HFux4hDetCNL3E3mQg9GKqJHR/Nz/O40HCgEJzu"
           },
           {
            name: "Amy Ramirez",
            email: "amy_ramirez@fakegmail.com",
            password: "$2b$12$LN9OzMA5sX3bQnMjkkWa.OjMrjif.LIbqx7YSf52FtQ9QcBlUS8ee"
           },
           {
            name: "Teresa Thomas",
            email: "teresa_thomas@fakegmail.com",
            password: "$2b$12$vQQlmv3ubYNZh8HfSXmu4.peazChIJo15UEnLpQz9O90nr8U/qlfS"
           },
           {
            name: "Theresa Holmes",
            email: "theresa_holmes@fakegmail.com",
            password: "$2b$12$1b.0k6/Ox.r9CHmPYPIs2eH5FZolXLc5e9E4IyTJd3YkzAVTB1Dta"
           },
           {
            name: "Desiree Pierce",
            email: "desiree_pierce@fakegmail.com",
            password: "$2b$12$6ndntifLUo9dshFeTkyOEO.xskWXa1n2q5dcl9uOglKz3cd0vMeJm"
           },
           {
            name: "Ned Stark",
            email: "sean_bean@gameofthron.es",
            password: "$2b$12$UREFwsRUoyF0CRqGNK0LzO0HM/jLhgUCNNIJ9RJAqMUQ74crlJ1Vu"
           },
           {
            name: "Varys",
            email: "conleth_hill@gameofthron.es",
            password: "$2b$12$mV9NHXHLISu3fDdd6jtU2.6DstBgnC6iWQQR.1h/MsDZp3ftTUBSq"
           },
           {
            name: "Jon Snow",
            email: "kit_harington@gameofthron.es",
            password: "$2b$12$fDEu1Ru66tLWAVidMN.b0.929BlfnyqdGuhWMyzfOAf/ATYOyLoY6"
           },
           {
            name: "Sansa Stark",
            email: "sophie_turner@gameofthron.es",
            password: "$2b$12$nCIVE81..AtAoysPZkl19.G5V0EdIwwsZh1f18lxWEr3dlpG/Uusi"
           },
           {
            name: "Thoros of Myr",
            email: "paul_kaye@gameofthron.es",
            password: "$2b$12$bkA1MM3UEwZ4N0VpCQY68eMY8HKTHWtk2xI2QnG4MuW5UWHlBrF8G"
           },
           {
            name: "Robert Jordan",
            email: "robert_jordan@fakegmail.com",
            password: "$2b$12$OumeM9/x5dBn5RLd/5QUNu8poyzsVbhJtLs2S02JqCwzubbbBK902"
           },
           {
            name: "Heather Leonard",
            email: "heather_leonard@fakegmail.com",
            password: "$2b$12$/mzEsE5kIBX1sWGWlp4GuOilNW.h5ZSIWVgYh.kbt3i0LG3BPY3hy"
           },
           {
            name: "Jeffrey Roberts",
            email: "jeffrey_roberts@fakegmail.com",
            password: "$2b$12$UrTFJ6Xnr043.QRwFVlqgudHC6GPSjejaldJw2/UFsR.dyPwj7cxK"
           },
           {
            name: "Mary Mitchell",
            email: "mary_mitchell@fakegmail.com",
            password: "$2b$12$rT8TmryDDeU446M.g1vVCePtByl85Y/vZ/awAn3eOXCke.bKXHr9G"
           },
           {
            name: "Paul Bailey",
            email: "paul_bailey@fakegmail.com",
            password: "$2b$12$m4x95MQ5iSqH.SmcxmBeOuiDYUi9iMcjT1VHXiwKBPHtQ9MNrKnru"
           },
           {
            name: "Osha",
            email: "natalia_tena@gameofthron.es",
            password: "$2b$12$NpElja7NerH/Vz.6pN0vV.7PNo1fOvMgFx0O8VOro6idM4Evn7n4G"
           },
           {
            name: "Pypar",
            email: "josef_altin@gameofthron.es",
            password: "$2b$12$GTKOrQ2gHc1o0OE37ub6d.yKxI4o9RU/72kPAbiaUbqkrANKYO34W"
           },
           {
            name: "Olly",
            email: "brenock_o'connor@gameofthron.es",
            password: "$2b$12$Mp0mG3u/6xuQSe/3/UjO8uHTHUDQUIcV0Iki42vfAqKLaBbYxHjv."
           },
           {
            name: "Mace Tyrell",
            email: "roger_ashton-griffiths@gameofthron.es",
            password: "$2b$12$Z7BRen4BsJqxnBlsRupWou2DlT7CQameOt7V9UlV0vWw3Z2B9sDj6"
           },
           {
            name: "Kenneth Chandler",
            email: "kenneth_chandler@fakegmail.com",
            password: "$2b$12$Bo8ObYfsGdSsJrcdf/bat.NFhp4ITDrsyZvYlTmZWh.zrReVKVH4u"
           },
           {
            name: "Justin Williams",
            email: "justin_williams@fakegmail.com",
            password: "$2b$12$5GAeUijkM4g3s5yBZniXxOYlA13vLLt.CPkXLCs3jlfsYJrgJ37fy"
           },
           {
            name: "Christian Williams",
            email: "christian_williams@fakegmail.com",
            password: "$2b$12$D2/B/KGdHRduXiT0/OX5Yu0YMfubTWOOaCjuOyQrDUMvq2Eju10ny"
           },
           {
            name: "Victoria Sanders",
            email: "victoria_sanders@fakegmail.com",
            password: "$2b$12$/2aikvro4gXgcp01Z8qIj.s2s53lpVcLQRbG/9VNbHa4i3ajo5dc."
           },
           {
            name: "Nichole Miller",
            email: "nichole_miller@fakegmail.com",
            password: "$2b$12$RwG1XZMs3MT/kfdH0L2EWOrfUkOuDkMl./KT.xld4Wyie9w87CM1a"
           },
           {
            name: "Yolanda Owen",
            email: "yolanda_owen@fakegmail.com",
            password: "$2b$12$lmpyYO8lCI.Y/J5AZF6/4u8XyEnCoZXsZzf7l9f7ECNbktqH2KZO."
           },
           {
            name: "Connie Barton",
            email: "connie_barton@fakegmail.com",
            password: "$2b$12$dFHzE0VmGHX7K7Je4QWZ0ucv4XX7zup9FWvrF8NFUHlm4k2a4z2se"
           },
           {
            name: "Jaime Lannister",
            email: "nikolaj_coster-waldau@gameofthron.es",
            password: "$2b$12$6vz7wiwO.EI5Rilvq1zUc./9480gb1uPtXcahDxIadgyC3PS8XCUK"
           },
           {
            name: "Catelyn Stark",
            email: "michelle_fairley@gameofthron.es",
            password: "$2b$12$fiaTH5Sh1zKNFX2i/FTEreWGjxoJxvmV7XL.qlfqCr8CwOxK.mZWS"
           },
           {
            name: "Daenerys Targaryen",
            email: "emilia_clarke@gameofthron.es",
            password: "$2b$12$NzpbWHdMytemLtTfFKduHenr2NZ.rvxIKuYM4AWLTFaUShxbJ.G3q"
           },
           {
            name: "Talisa Maegyr",
            email: "oona_chaplin@gameofthron.es",
            password: "$2b$12$B3DKrkTVNJDlgToXClpcwOJvnKICUsLcrTxNfZIeoqbHIQURsNrXS"
           },
           {
            name: "Margaery Tyrell",
            email: "natalie_dormer@gameofthron.es",
            password: "$2b$12$AjC.876rd2dgsSIu.5c4qembdVfdDajMIgueMYuOBoskJUGHzpw46"
           },
           {
            name: "Myrcella Baratheon",
            email: "nell_tiger_free@gameofthron.es",
            password: "$2b$12$boJbPqaRG45hQs7jzcwLWu03lGXG9DHIn3rVHcJQ/NK0PaYokP5eu"
           },
           {
            name: "Shae",
            email: "sibel_kekilli@gameofthron.es",
            password: "$2b$12$FyKikoJynO1kGJ6cTuXaKeKRWauwI5TNlTYiNBgPnizN6XoGB8qpi"
           },
           {
            name: "Brienne of Tarth",
            email: "gwendoline_christie@gameofthron.es",
            password: "$2b$12$YjMZPFrj1qS6I/Zy1bxlgOV402ijFcNE.6YVueL5FoWK3eE/QVgKu"
           },
           {
            name: "Podrick Payne",
            email: "daniel_portman@gameofthron.es",
            password: "$2b$12$yYDEeKYMkE2zDjP35/RfZONzFZEuv026MnSRAJ5ZPUoBUhvu6ZRN."
           },
           {
            name: "Anthony Thompson",
            email: "anthony_thompson@fakegmail.com",
            password: "$2b$12$Ki.7nartO8MscZ53cV5jEuLa83JD8OKd6sgCqxird98ijmWRTRcrC"
           },
           {
            name: "Joshua Kent",
            email: "joshua_kent@fakegmail.com",
            password: "$2b$12$xSofV4dlicgiRA9yRtB9BescTvQFusNdde7/yz6AQ8lRKKMTdhRLW"
           },
           {
            name: "The Waif",
            email: "faye_marsay@gameofthron.es",
            password: "$2b$12$JGlWYUPkZ3xryO9h4x4wdOsnbuLdzbSMSCaJENY6LaLfWYIl86xdG"
           },
           {
            name: "Thomas Buckley",
            email: "thomas_buckley@fakegmail.com",
            password: "$2b$12$.zRRXpjiT0uuR13kt85CDesUMJPIEK1mziudzedd7S10YVAd31586"
           },
           {
            name: "Garrett Obrien",
            email: "garrett_obrien@fakegmail.com",
            password: "$2b$12$ElY14tB9rHL3L4yhrY7gcOGr0u0eFZ5Eb6IoG3eH15sqAeAqbco/a"
           },
           {
            name: "Michael Moore",
            email: "michael_moore@fakegmail.com",
            password: "$2b$12$9rCFOeptsZ6eFBzoprKRFOKS.NQteHtfWurzBkndHNt9DLVdAZGsW"
           },
           {
            name: "Paula Sullivan",
            email: "paula_sullivan@fakegmail.com",
            password: "$2b$12$6eM.dlL7Wi84eYUkwzkU.erG/JqAvwOKSGn5V1bG6HLfIFrpTYaXi"
           },
           {
            name: "Anthony Cline",
            email: "anthony_cline@fakegmail.com",
            password: "$2b$12$JWTRRBJgXOv.peG2HDFHeORuwvOaZigFtxhUSDhbpPEFRRuhS19F2"
           },
           {
            name: "Edward Barrett",
            email: "edward_barrett@fakegmail.com",
            password: "$2b$12$Jzx8f0IiHYFcdU/PEceFJeS1HjC43HTL2aBhKQt8uUM2zfJf3p7Ki"
           },
           {
            name: "Jennifer Frazier",
            email: "jennifer_frazier@fakegmail.com",
            password: "$2b$12$Xm1ktF5woIqEw5q00xCnZO.PwJDWi9VIrbbrMemqv5zzF1zJGN2AC"
           },
           {
            name: "John Bishop",
            email: "john_bishop@fakegmail.com",
            password: "$2b$12$ifnm6ZFlRQaV4YFe2WcpKuyYfp2eW.42QECH7dkEoD0WeTFpQ8pCe"
           },
           {
            name: "Jaqen H'ghar",
            email: "tom_wlaschiha@gameofthron.es",
            password: "$2b$12$sgxhWIzY6UiWvWFRMslCDusielBdf8tpNHraxHAS3c9QNwcCHdHJq"
           },
           {
            name: "Bran Stark",
            email: "isaac_hempstead_wright@gameofthron.es",
            password: "$2b$12$Z7/ztVm8eWMDwTg.doS.UO7JbsbA9IbLomND1VxIZEdAN3keW6csS"
           },
           {
            name: "Kevan Lannister",
            email: "ian_gelder@gameofthron.es",
            password: "$2b$12$YB/GLht749jn9jxcwOnw4.ZekNoiSzmS8qS.raqFzZPrNbBJAB20O"
           },
           {
            name: "Eddison Tollett",
            email: "ben_crompton@gameofthron.es",
            password: "$2b$12$adD4J5Cnk/aeVdKC3qnD7ufw7S9sTrvWoiSxNkLqZsr0SWjFj91Wq"
           },
           {
            name: "Shireen Baratheon",
            email: "kerry_ingram@gameofthron.es",
            password: "$2b$12$F8VweX6dNiq4Gymmc7LJsu5U1G0d0wxaf/95CVl5w/4..mFfdgqdG"
           },
           {
            name: "Richard Schmidt",
            email: "richard_schmidt@fakegmail.com",
            password: "$2b$12$3odZLmzPAoFZc/S3mVRCWOimTOx.RGTY1CP/jJBsW42F0zfbwOXQK"
           },
           {
            name: "Ms. Cathy Miller",
            email: "ms._cathy_miller@fakegmail.com",
            password: "$2b$12$wQ02A.LLpeLLEItcBZF2IOOSlds3VjdaXOI2XRt/ElyG2852ITbiW"
           },
           {
            name: "Blake Sellers",
            email: "blake_sellers@fakegmail.com",
            password: "$2b$12$g2u20yqqpzbNipA6lfIoBO3Cs9jM7jsWBhDheF1OsthHpLfEcD2Gm"
           },
           {
            name: "Donna Russell",
            email: "donna_russell@fakegmail.com",
            password: "$2b$12$5PICbqGRxD2Mj5ljv0wQnu6d.a4mNPoma1GtMvYOHE.M7bz6vIu4e"
           },
           {
            name: "Magical Mr. Mistoffelees",
            email: "magicz@cats.com",
            password: "somehashedpw"
           },
           {
            name: "Tyrion Lannister",
            email: "peter_dinklage@gameofthron.es",
            password: "$2b$12$xtHwQNXYlQzP2REobUDlzuQimjzBlXrTx1GnwP.xkfULeuuUpRxa2"
           },
           {
            name: "Stannis Baratheon",
            email: "stephen_dillane@gameofthron.es",
            password: "$2b$12$vbPwOM9QkSOsOXRgLSZiqe9JPJtBX1JUwm06d3lYVViKxrYCIyhEm"
           },
           {
            name: "Bronn",
            email: "jerome_flynn@gameofthron.es",
            password: "$2b$12$9rzMIF3lv7kASdTdam2eOOjWrDSN.qi2hpY5tyOfDPe545XfrQHpu"
           },
           {
            name: "Grenn",
            email: "mark_stanley@gameofthron.es",
            password: "$2b$12$gpgDQ2RBHotU4x/ppd0P9ueseDdLTzFHB.4kjkez/ZNerubyFSy1i"
           },
           {
            name: "Greg Powell",
            email: "greg_powell@fakegmail.com",
            password: "$2b$12$XpveUB6kIiU3zG5aABw26OitIB7cDBbSUWJAz4WDF4XXyNNJ/mp76"
           },
           {
            name: "Cameron Duran",
            email: "cameron_duran@fakegmail.com",
            password: "$2b$12$50w2j63ATGmhVOh2rgdjv.wOd9TV0Jb9Xk/Anms0fxVSvGMf5MwvK"
           },
           {
            name: "Brenda Martin",
            email: "brenda_martin@fakegmail.com",
            password: "$2b$12$H.QWgwnd5SwchVniifWfS.BmBefv6FhBBKqjcDlI20ZdqgFvIy3F2"
           },
           {
            name: "Kristen Schmidt",
            email: "kristen_schmidt@fakegmail.com",
            password: "$2b$12$lUexqpKoc6RNXLAHGPZ50OLWr3oKfrJW9Vg.q6s7DrCs5X0blJYtW"
           },
           {
            name: "Taylor Hill",
            email: "taylor_hill@fakegmail.com",
            password: "$2b$12$5NRO3TpZti62ZN2rSlxYoOurfMQAUEQ4oIufrfAhcsSqGp4eKF4Gi"
           },
           {
            name: "Melissa Young",
            email: "melissa_young@fakegmail.com",
            password: "$2b$12$iei9pWuCZ6wF/TJhVJ1gE.k7dkc.0NiHgR6/lJCn4ANkaBkdKS/Wy"
           },
           {
            name: "Lori Blankenship",
            email: "lori_blankenship@fakegmail.com",
            password: "$2b$12$SQUa.3cIKcazfuUOpd9/huR.VeFAH.uR.ESvIMfbMW1YQjZx47Tw6"
           },
           {
            name: "Shawn Mccormick",
            email: "shawn_mccormick@fakegmail.com",
            password: "$2b$12$fVJEFj7SXlqT0EmE9k00FuZLNH52NFSPriUqm8GGT6QQmuzrsMwUC"
           },
           {
            name: "Cersei Lannister",
            email: "lena_headey@gameofthron.es",
            password: "$2b$12$FExjgr7CLhNCa.oUsB9seub8mqcHzkJCFZ8heMc8CeIKOZfeTKP8m"
           },
           {
            name: "Viserys Targaryen",
            email: "harry_lloyd@gameofthron.es",
            password: "$2b$12$cpwVmU4DyuQxgwpdrVJhaudzbKOXlHRbf.tpCuHjpAqonuoyvvEG6"
           },
           {
            name: "Samwell Tarly",
            email: "john_bradley-west@gameofthron.es",
            password: "$2b$12$ZcZj9wKjlT/dCCrmupiZZ..JA3c9HoufxRygL1DkY9hsClT0iyflG"
           },
           {
            name: "Tommen Baratheon",
            email: "dean-charles_chapman@gameofthron.es",
            password: "$2b$12$POxM5GGAYJNe2phLqcZJ5.3MXEVhUXTQouqvc3hwCU1ZItYbySQsy"
           },
           {
            name: "Janos Slynt",
            email: "dominic_carter@gameofthron.es",
            password: "$2b$12$ssMaPHBLj9tGpLgRXWSCeODrtccHwVbZvDKckjSg1duBLsBZOco8e"
           },
           {
            name: "Irri",
            email: "amrita_acharia@gameofthron.es",
            password: "$2b$12$mTvd3eFqgflqO74rS95zKOFU3wKRe5alg.iM23AknNnpZ/TdT95eK"
           },
           {
            name: "Alliser Thorne",
            email: "owen_teale@gameofthron.es",
            password: "$2b$12$IWJV4xTZ4dyBsvwQQ2FlF.yw3Mfy.XZCOsprt6kaLRtHu9k6ZHbx."
           },
           {
            name: "Richard Davis",
            email: "richard_davis@fakegmail.com",
            password: "$2b$12$q5/117rbpGoczEDK5LcDjeeOmOnzkVi6h2VIN.1Dbugn6Y5kOo4Ja"
           },
           {
            name: "Victor Patel",
            email: "victor_patel@fakegmail.com",
            password: "$2b$12$VyWh4xdBtuZrhuR933GY6evfU7.py2dJIP9wuSmeiJ.94iP0EO4Pq"
           },
           {
            name: "Megan Richards",
            email: "megan_richards@fakegmail.com",
            password: "$2b$12$iDxjjcgBA.Q9zjTlOD4KJuhPJx6gw5GecbDWCbVmfzzv2rqNbC2vC"
           },
           {
            name: "Victor Fleming",
            email: "victor_fleming@fakegmail.com",
            password: "$2b$12$DQSGcwfMllp0HTDNI6QLGeI41zrqprdlEnIXf6RHdpOCMBc37wzV."
           },
           {
            name: "Brandon Hardy",
            email: "brandon_hardy@fakegmail.com",
            password: "$2b$12$7qxHDP2xlgztpQITlwjlBugE2ned0nRmm22Gu1mK34fZJvh5IE4SO"
           },
           {
            name: "Keith Phillips",
            email: "keith_phillips@fakegmail.com",
            password: "$2b$12$oXW3cr3lIY37/Ps3uSZBj.rFQoFjZAuFvtHNyxHyocIIlI9lT93MO"
           },
           {
            name: "Andrea Le",
            email: "andrea_le@fakegmail.com",
            password: "$2b$12$JS87HWuL2y0P1E6kYrcbKOKx22.wsKEdLtS0F734/vKdhuduLM8Ve"
           },
           {
            name: "Patricia Good",
            email: "patricia_good@fakegmail.com",
            password: "$2b$12$t9xIBFolWLphJBO9VCpV4uoZDx/TOhg7N436kBe72hgDMxsGvQr3m"
           },
           {
            name: "Julia Nichols",
            email: "julia_nichols@fakegmail.com",
            password: "$2b$12$HZbkbktkRTaV7LiwLxW3D.gDV5lQAy05Wumz981D7gwvSoAc9uJxq"
           },
           {
            name: "Deborah Kennedy",
            email: "deborah_kennedy@fakegmail.com",
            password: "$2b$12$lJL2fO48ZrLRhZTf1FBVv.eaaQQ6FSSUh/SwAqvRkcCgM1lZp4moG"
           },
           {
            name: "Ashlee Hart",
            email: "ashlee_hart@fakegmail.com",
            password: "$2b$12$S707opDk6HG/Lqk7MaHeQ.1N36I6kEUOhRv/RQEHZUbw89xAuO6Ju"
           },
           {
            name: "Robert Baratheon",
            email: "mark_addy@gameofthron.es",
            password: "$2b$12$yGqxLG9LZpXA2xVDhuPnSOZd.VURVkz7wgOLY3pnO0s7u2S1ZO32y"
           },
           {
            name: "Jorah Mormont",
            email: "iain_glen@gameofthron.es",
            password: "$2b$12$K8bKkwnpkrjsBPzASZxO/.yj7d9kvupiVtO6JA3Xl106AKXr3pXFK"
           },
           {
            name: "Robb Stark",
            email: "richard_madden@gameofthron.es",
            password: "$2b$12$XPLvWQW7tjWc/PX9jMVRnO8w.lR6hv144ee8pc8nDsWIAWxfwxHzy"
           },
           {
            name: "Khal Drogo",
            email: "jason_momoa@gameofthron.es",
            password: "$2b$12$7tgpVkBxUqQiYFkHjZyoMuEzFU5BSI.FYkOXHu4zCRlRsa15sHQo6"
           },
           {
            name: "Davos Seaworth",
            email: "liam_cunningham@gameofthron.es",
            password: "$2b$12$jbgNoWG97LHNIm4axwXDz.tkFITsmw/aylIY/lZDaJRgnHZjB029e"
           },
           {
            name: "Melisandre",
            email: "carice_van_houten@gameofthron.es",
            password: "$2b$12$ZdSvCDMwVLFgJGDOsDbFLOD/utICnkbJV0OVJJ8lUHqSK3VbuqKuS"
           },
           {
            name: "Othell Yarwyck",
            email: "brian_fortune@gameofthron.es",
            password: "$2b$12$RfLlYF.8Vxj4MXILL2kvIuyuAO8rN3KR6//UL1a6rNIfNgBaASS66"
           },
           {
            name: "Loras Tyrell",
            email: "finn_jones@gameofthron.es",
            password: "$2b$12$Eb5TLqYLS74pLP9r.2agNe56ht1dvFkQOCODxku8KQmLfldBGa7Cu"
           },
           {
            name: "Hot Pie",
            email: "ben_hawkey@gameofthron.es",
            password: "$2b$12$o99XQuQRvutjESJ8/eqnWe4w8aCYXHFF1cJmZdeKs6acmoPaVlCK."
           },
           {
            name: "Qyburn",
            email: "anton_lesser@gameofthron.es",
            password: "$2b$12$Aogz..TkpBMB5UFfgIRSP.dy7DX9qgOi587FSORqRWqApfbw3x7wy"
           },
           {
            name: "Yvette Roth",
            email: "yvette_roth@fakegmail.com",
            password: "$2b$12$JmceK9VLl7aY/uF9.ZdLTOuj0y5xR3jjvDZVyFCCPQT/lly5IocIm"
           },
           {
            name: "Michael Day",
            email: "michael_day@fakegmail.com",
            password: "$2b$12$1BdlPh4Imkw8kn7aCgEWsOCt1DED7cFTMlVOf62k6lGxEvQEe1L56"
           },
           {
            name: "Thomas Morris",
            email: "thomas_morris@fakegmail.com",
            password: "$2b$12$IfMqv/fVHb3KZtQxKtUXP.C.Uh9rNI9qKWB4eZ6d2YiEl5P3XnDk."
           },
           {
            name: "Jonathon Mccullough",
            email: "jonathon_mccullough@fakegmail.com",
            password: "$2b$12$uZlaQmlnL501KsvPJSCJbO47tz9.8GB8Hl0Xu31xURToXMP8dWzOi"
           },
           {
            name: "Arya Stark",
            email: "maisie_williams@gameofthron.es",
            password: "$2b$12$19h3KjeTg3/sPNFHztdb6eGWKrCxIwlVXVSh9POSi5PS9kSlguZEq"
           },
           {
            name: "Gregor Clegane",
            email: "hafthór_júlíus_björnsson@gameofthron.es",
            password: "$2b$12$6NQKRPtpvs.3w2VuLBgQv.nYBplKlGVK3GRvLqw1n06wO424E.zq6"
           },
           {
            name: "Jojen Reed",
            email: "thomas_brodie-sangster@gameofthron.es",
            password: "$2b$12$ZAJ8OFWUFNdxhc0xyTd42evQJfL7FnEdk3koHwYtHpDqsrZI61XP."
           },
           {
            name: "Emily Ellis",
            email: "emily_ellis@fakegmail.com",
            password: "$2b$12$UuCb5RqPEgheoLlwOF/Jb.x9gpFVmD30oUwpSRKljwo8pBUmWT6eG"
           },
           {
            name: "Amy Phillips",
            email: "amy_phillips@fakegmail.com",
            password: "$2b$12$z.IU36O/1r25xdhI.Gdw1e2dLXSjIgIMNrxginP0/iVIlZcCWiyaK"
           },
           {
            name: "April Cole",
            email: "april_cole@fakegmail.com",
            password: "$2b$12$DhQx.0ywiZK7v4UrN6YeXuS06U2JHNM2owUHxbL8aXlobGT7E65Ke"
           },
           {
            name: "Kimberly Gates",
            email: "kimberly_gates@fakegmail.com",
            password: "$2b$12$fE/FzdNHaDJS2nW5jPziHe0lgKcVqPEF6B2X7vCx35RgvEVp2DS7y"
           },
           {
            name: "Thomas Green",
            email: "thomas_green@fakegmail.com",
            password: "$2b$12$6u6dECDnaDoNehg1gU14KOcGAtmMnKcnsSv7U2W693xk/UTKF.of6"
           },
           {
            name: "Ellaria Sand",
            email: "indira_varma@gameofthron.es",
            password: "$2b$12$/sfLmn9AwehR9itBml.p..fKYxUv66om0TallTLMjw2klrmiLwaHy"
           },
           {
            name: "Doreah",
            email: "roxanne_mckee@gameofthron.es",
            password: "$2b$12$3M34QX9A/7jNLn9neSddUeW5oJfcl5OYOqYUL.7L87/ThA8Xbfug6"
           },
           {
            name: "Selyse Baratheon",
            email: "tara_fitzgerald@gameofthron.es",
            password: "$2b$12$Ri/w5TEI/CsWxvdscYkzhuVzKF0Zy98zgDWO5pmVsXb05jki5PKrG"
           },
           {
            name: "Sarah Lewis",
            email: "sarah_lewis@fakegmail.com",
            password: "$2b$12$5kCUjcP3lvYSzhouVJTpOeCZ7e7Xke8gDoPPg2Uyz39tNKrp9om1a"
           },
           {
            name: "Jason Smith",
            email: "jason_smith@fakegmail.com",
            password: "$2b$12$l2JMT18BcA8.R3tUxVDKj.9/jwre8CAccr21PvJ576nJ8Pvegxn0m"
           },
           {
            name: "Kelsey Smith",
            email: "kelsey_smith@fakegmail.com",
            password: "$2b$12$S.moHRDfHWLM.F5IasBPQek/y76l0ejX.a5EnPQMbtpECI3tWXS/y"
           },
           {
            name: "Melissa Jones",
            email: "melissa_jones@fakegmail.com",
            password: "$2b$12$S6.mFqBn8QMRtyeJUJbRcOwkrgtjHyg7GkmxilnWvOzRtPar.d1K."
           },
           {
            name: "Lisa Russo",
            email: "lisa_russo@fakegmail.com",
            password: "$2b$12$pOdj440b9rps82eCfXzCiONHjBo9zowp62kNDdQSRVPMwGJmxAk0W"
           },
           {
            name: "Jose Hall",
            email: "jose_hall@fakegmail.com",
            password: "$2b$12$ghmMMtvS1Wcmf9.UEF5ep.sAU5KS2.GUpgK41hiPh4EzyJYCy2P42"
           },
           {
            name: "Blake Fitzgerald",
            email: "blake_fitzgerald@fakegmail.com",
            password: "$2b$12$.ilQEC/iyR4FhnMA1PmzVe.kMkAbI7htSZJKquTjnaVFH.RDmsP32"
           },
           {
            name: "Eric Navarro",
            email: "eric_navarro@fakegmail.com",
            password: "$2b$12$ULJ9tL7jh8yPXNDmCJi4C.mzkxzLfIQXakq3td9dJQs3io/Zg/AE2"
           },
           {
            name: "Anthony Hurst",
            email: "anthony_hurst@fakegmail.com",
            password: "$2b$12$9M2cew6pOM.35LY474rMkeVD4WxfvF2lDtVg60jZrlMdbaexrIfwK"
           },
           {
            name: "Jeor Mormont",
            email: "james_cosmo@gameofthron.es",
            password: "$2b$12$tz5dSvAjtduFuuXFQwMH2OJwb3QKr9/gR5uefaQ3gHJojhLaKxdNK"
           },
           {
            name: "Tywin Lannister",
            email: "charles_dance@gameofthron.es",
            password: "$2b$12$/i04T5yEJvmsBhF0Jd.kJOk3ZhRzezbTU7ASEM5o43Xxsa4o6IgEy"
           },
           {
            name: "Tormund Giantsbane",
            email: "kristofer_hivju@gameofthron.es",
            password: "$2b$12$SsfE7EbmV/HH6nii2jJFOe59P91dAV6CqYdGUDOTkNwcPAScUJyVa"
           },
           {
            name: "Olenna Tyrell",
            email: "diana_rigg@gameofthron.es",
            password: "$2b$12$8Oh3DVnn8e5NK9nHtX4ZVeprB3O6Zrb8l8KxT2l3rraW11HhxH3di"
           },
           {
            name: "Morgan Smith",
            email: "morgan_smith@fakegmail.com",
            password: "$2b$12$vm836TjgawCzAglcRq/GWOPJpAOT9W.w0tEAGqoIvDxMRn.rfZCQK"
           },
           {
            name: "Daniel Simmons",
            email: "daniel_simmons@fakegmail.com",
            password: "$2b$12$o2vaieyGbqZ5a.BhIB3e9.cZ1dEO3Ob/3gc1Ef1/QX4cI9vnMraUC"
           },
           {
            name: "Anthony Smith",
            email: "anthony_smith@fakegmail.com",
            password: "$2b$12$OLhPk6TMdQ9rY/LIMjsaa.Pfb6IlCQgZK2BCx37lYqotgy9tHo3F6"
           },
           {
            name: "Jerry Cabrera",
            email: "jerry_cabrera@fakegmail.com",
            password: "$2b$12$HEimsC0UBidI9AYqPU4Mr.P8UZVO6zsZm2VUFVeuA467fdqp8WJDu"
           },
           {
            name: "Elizabeth Wiggins",
            email: "elizabeth_wiggins@fakegmail.com",
            password: "$2b$12$UGbyi1WBFHu9xqTYp2nxzuGtWaolgxyj/7r2kXjSltr7s8jzr8RFm"
           },
           {
            name: "Jordan Medina",
            email: "jordan_medina@fakegmail.com",
            password: "$2b$12$QcSxfXU.jBizvmaU/zc33eIChz4lVAcQalzCupFBv3eGYEsVhJazW"
           },
           {
            name: "Missandei",
            email: "nathalie_emmanuel@gameofthron.es",
            password: "$2b$12$wMY9mXJCiDZ5dPbgroygBOKjWbuCzv.Snb1sZlp7v41LzyueP/G.S"
           },
           {
            name: "Hodor",
            email: "kristian_nairn@gameofthron.es",
            password: "$2b$12$hFkSycBpMDENs/sT.5y0feifE5IluHUJmYHqH/lSkcc81/HRzzRSq"
           },
           {
            name: "Rast",
            email: "luke_barnes@gameofthron.es",
            password: "$2b$12$wzKOV4fkmI5hfiQLFYpSDePsSBqenWs8CpI1N7OcD1A.3NF98adqy"
           },
           {
            name: "Beric Dondarrion",
            email: "richard_dormer@gameofthron.es",
            password: "$2b$12$CHeWRV3bBssK0MR1o4FLcOCmFLaPIPTA0KzKI0aWYDnXCKm98MbJy"
           },
           {
            name: "Grey Worm",
            email: "jacob_anderson@gameofthron.es",
            password: "$2b$12$Kplgm66WrJlrIxV7g.uQj.zSSY3Q/GuznI6i9z5I9abqcszpTGc0O"
           },
           {
            name: "Bowen Marsh",
            email: "michael_condron@gameofthron.es",
            password: "$2b$12$G8bl4haz.de9f1ohneIcIus3GCj4nNNP7WiufQy6.aoIh01AVk2Xq"
           },
           {
            name: "Megan Turner",
            email: "megan_turner@fakegmail.com",
            password: "$2b$12$nR8x.s7PmEQttaF7RS33euSLEZzuu0G2UhSK.PeHJEZEjcK.J3Xq6"
           },
           {
            name: "Kathryn Sosa",
            email: "kathryn_sosa@fakegmail.com",
            password: "$2b$12$naMKKiQlGxdNh1WMCa6ws.Yo1nEr5OWBILzMYEDlt.fw.UmOVnMhu"
           },
           {
            name: "Lori Franklin",
            email: "lori_franklin@fakegmail.com",
            password: "$2b$12$h25/G5rXZejwsAhn7rvYIuuLzwnayZcf4yX0CV02gDh0dA14UyVsy"
           },
           {
            name: "John Roman",
            email: "john_roman@fakegmail.com",
            password: "$2b$12$UW2RqzQlgLcPNLn3gxY16uMhqso5GgeAzYfAQVY2yplhacxZ.daSy"
           },
           {
            name: "Barbara Gonzalez",
            email: "barbara_gonzalez@fakegmail.com",
            password: "$2b$12$qxLcDfjy7RdjfJbrFRHntu0kzVnXzJKED0on8TZ84dLlSCKKkaJt2"
           },
           {
            name: "Taylor Scott",
            email: "taylor_scott@fakegmail.com",
            password: "$2b$12$rIJO4MKGZFHKyPeU9X8hSOsCjL3Isa9Gv8rZ7rzM7kKA3XUd1PAlO"
           },
           {
            name: "Nicholas Webster",
            email: "nicholas_webster@fakegmail.com",
            password: "$2b$12$LLuOi5eMoy6hWIC61dolKu9/0bxRKsL0kwWfcJ8A0qr.SX/AR5aCi"
           },
           {
            name: "Jamie Santana",
            email: "jamie_santana@fakegmail.com",
            password: "$2b$12$KhXBuPIzyxoqMjpTn4h4ku9Dky3bofFDVNrMD5T6Z2Dd1j1wWAGe2"
           },
           {
            name: "Nicholas Johnson",
            email: "nicholas_johnson@fakegmail.com",
            password: "$2b$12$hdzNySj4l/tZR4op5oQXb.FStH3u7ZHjmhhtrpQFIEe39NkBS6R1y"
           },
           {
            name: "Patrick Knight",
            email: "patrick_knight@fakegmail.com",
            password: "$2b$12$GrKhwH1qeeJNGcGLmjg9f.k7ruCRxGUbfm4z3mgzGkiXXZVvKGCwy"
           },
           {
            name: "Donna Smith",
            email: "donna_smith@fakegmail.com",
            password: "$2b$12$LYIyq5Bsszh3/8efEYmJRuWDqhOeg8K5czQwSLxEBhOTyhOX34JEy"
           },
           {
            name: "Juan Perez",
            email: "juanperez@gameofthron.es",
            password: "abc123",
            
           }
    ]
);


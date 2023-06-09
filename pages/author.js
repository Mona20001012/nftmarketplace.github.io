import React, { useState, useEffect, useContext } from "react";

//INTERNAL IMPORT
import Style from "../styles/author.module.css";
import { Banner, NFTCardTwo } from "../collectionPage/collectionIndex";
import { Brand, Title } from "../components/componentsindex";
import FollowerTabCard from "../components/FollowerTab/FollowerTabCard/FollowerTabCard";
import images from "../img";
import {
  AuthorProfileCard,
  AuthorTaps,
  AuthorNFTCardBox,
} from "../authorPage/componentIndex";

//IMPORT SMART CONTRACT DATA
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";

const author = () => {
  const followerArray = [
    {
      background: images.creatorbackground1,
      user: images.user1,
      seller: "7d64gf748849j47fy488444",
    },
    {
      background: images.creatorbackground2,
      user: images.user2,
      seller: "7d64gf748849j47fy488444",
    },
    {
      background: images.creatorbackground3,
      user: images.user3,
      seller: "7d64gf748849j47fy488444",
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
      seller: "7d64gf748849j47fy488444",
    },
    {
      background: images.creatorbackground5,
      user: images.user5,
      seller: "7d64gf748849j47fy488444",
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
      seller: "7d64gf748849j47fy488444",
    },
  ];

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [collectiables, setCollectiables] = useState(true);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [created, setCreated] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [like, setLike] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [follower, setFollower] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [following, setFollowing] = useState(false);

  //IMPORT SMART CONTRACT DATA
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { fetchMyNFTsOrListedNFTs, currentAccount } = useContext(
    NFTMarketplaceContext
  );

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [nfts, setNfts] = useState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [myNFTs, setMyNFTs] = useState([]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    fetchMyNFTsOrListedNFTs("fetchItemsListed").then((items) => {
      setNfts(items);
    });
  }, [fetchMyNFTsOrListedNFTs]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    fetchMyNFTsOrListedNFTs("fetchMyNFTs").then((items) => {
      setMyNFTs(items);
    });
  }, [fetchMyNFTsOrListedNFTs]);

  return (
    <div className={Style.author}>
      <Banner bannerImage={images.creatorbackground2} />
      <AuthorProfileCard currentAccount={currentAccount} />
      <AuthorTaps
        setCollectiables={setCollectiables}
        setCreated={setCreated}
        setLike={setLike}
        setFollower={setFollower}
        setFollowing={setFollowing}
      />

      <AuthorNFTCardBox
        collectiables={collectiables}
        created={created}
        like={like}
        follower={follower}
        following={following}
        nfts={nfts}
        myNFTS={myNFTs}
      />
      <Title
        heading="Popular Creators"
        paragraph="Click on music icon and enjoy NTF music or audio"
      />
      <div className={Style.author_box}>
        {followerArray.map((el, i) => (
          // eslint-disable-next-line react/jsx-key
          <FollowerTabCard i={i} el={el} />
        ))}
      </div>
      <Brand />
    </div>
  );
};

export default author;

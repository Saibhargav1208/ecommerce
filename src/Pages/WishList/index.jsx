import React from "react";

import "./WishList.css";
import PageContainer from "../../Component/Layout/PageContainer";
import SectionContainer from "../../Component/Layout/SectionContainer";
import EmptyWishList from "../../Component/Card/EmptyWishList";

function WishList() {
  return (
    <PageContainer>
      <SectionContainer>
        <EmptyWishList />
      </SectionContainer>
    </PageContainer>
  );
}

export default WishList;

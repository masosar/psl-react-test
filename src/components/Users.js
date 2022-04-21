import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../features/user/userSlice";

const Users = () => {
  const dispatch = useDispatch();

  const { list: user } = useSelector((state) => state.user);
  //   const userList = [];

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="common_content__H2Tba">
      <div className="common_main__2r_Q0">
        <div className="StoryRiver_container__e617t">
          <header className="common_header__349Ik">
            <h1 className="Typography_headline__1LB3G common_headline__1LkRX">
              TOP STORIES
            </h1>
          </header>
          <div>
            {user.map((item, i) => (
              <article className="StoryExcerpt_container__1v8Qm" key={i}>
                <div className="StoryExcerpt_imageContainer__2_KyW">
                  <img
                    src={item.picture.medium}
                    alt={item.id.value}
                    className="story-image"
                  />
                </div>
                <div className="StoryExcerpt_content__2FL0_">
                  <span className="Tag_Tag__33_9b">Top Story</span>
                  <header>
                    <span className="StoryExcerpt_link__1H-rZ">
                      <h2 className="Typography_title__3mPFQ Typography_gutter__30K4M StoryExcerpt_title__1Y0s6">
                        {item.name.first} {item.name.last}
                      </h2>
                    </span>
                  </header>
                  <div className="StoryExcerpt_body__3SvFx">
                    <p className="Typography_body1__C9NiB">
                      Their existing collaboration will be expanded to develop
                      additional drug candidates in autoimmune and fibrotic
                      diseases using Dragonfly's tri-specific NK cell engager
                      therapy platform. -{item.email}
                    </p>
                  </div>
                  <footer>
                    <div className="StoryExcerpt_published__3yiLq">
                      8 hours ago
                    </div>
                  </footer>
                </div>
              </article>
            ))}
          </div>
          <div className="ViewMoreBox_container__22DvC">
            <div className="Ripple_rippleParent__L8DuO ViewMoreBox_ripple__3moZQ">
              <span className="ViewMoreLink_text__nAnwK">
                View More Top Stories
              </span>
              <svg
                width="24"
                height="24"
                className="Icon_svg__25XjT ViewMoreLink_icon__3xGXx Icon_secondary__3Jgs5"
                icon="svg/material-design-icons/hardware/keyboard_arrow_right"
                viewBox="0 0 24 24"
              >
                <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="common_sidebar__sHViJ">
        <div className="StoryRiver_container__e617t">
          <header className="common_header__349Ik">
            <h2 className="Typography_title__3mPFQ common_title__3Kijt">
              <span className="HomePage_iav__1o0Md">
                Insight, Analysis &amp; Views
              </span>
            </h2>
            <div>
              <article className="StoryExcerpt_container__1v8Qm">
                <div className="StoryExcerpt_content__2FL0_">
                  <span className="Tag_Tag__33_9b ">ViewPoints</span>
                  <span className="Tag_Tag__33_9b StoryExcerpt_plus__2djJX">
                    PLUS
                  </span>
                  <header>
                    <span className="StoryExcerpt_link__1H-rZ">
                      <h2 className="Typography_title__3mPFQ Typography_gutter__30K4M StoryExcerpt_title__1Y0s6 StoryExcerpt_sidebar__2P_sE">
                        ViewPoints: Otonomy looks to break ground in hearing
                        loss{" "}
                      </h2>
                    </span>
                  </header>
                </div>
              </article>
              <article className="StoryExcerpt_container__1v8Qm">
                <div className="StoryExcerpt_content__2FL0_">
                  <span className="Tag_Tag__33_9b ">ViewPoints</span>
                  <span className="Tag_Tag__33_9b StoryExcerpt_plus__2djJX">
                    PLUS
                  </span>
                  <header>
                    <span
                      className="StoryExcerpt_link__1H-rZ"
                      href="/story/5552157"
                    >
                      <h2 className="Typography_title__3mPFQ Typography_gutter__30K4M StoryExcerpt_title__1Y0s6 StoryExcerpt_sidebar__2P_sE">
                        ViewPoints: J&amp;J gets earnings season started with a
                        ‘meh’{" "}
                      </h2>
                    </span>
                  </header>
                </div>
              </article>
              <article className="StoryExcerpt_container__1v8Qm">
                <div className="StoryExcerpt_content__2FL0_">
                  <span className="Tag_Tag__33_9b ">ViewPoints</span>
                  <span className="Tag_Tag__33_9b StoryExcerpt_plus__2djJX">
                    PLUS
                  </span>
                  <header>
                    <span className="StoryExcerpt_link__1H-rZ">
                      <h2 className="Typography_title__3mPFQ Typography_gutter__30K4M StoryExcerpt_title__1Y0s6 StoryExcerpt_sidebar__2P_sE">
                        ViewPoints: Regeneron finds a cancer bargain in
                        Checkmate{" "}
                      </h2>
                    </span>
                  </header>
                </div>
              </article>
              <article className="StoryExcerpt_container__1v8Qm">
                <div className="StoryExcerpt_content__2FL0_">
                  <span className="Tag_Tag__33_9b ">KOL Views</span>
                  <header>
                    <span className="StoryExcerpt_link__1H-rZ">
                      <h2 className="Typography_title__3mPFQ Typography_gutter__30K4M StoryExcerpt_title__1Y0s6 StoryExcerpt_sidebar__2P_sE">
                        KOL Views Preview: How did epcoritamab affect CD20xCD3
                        bispecific optimism?
                      </h2>
                    </span>
                  </header>
                </div>
              </article>
              <article className="StoryExcerpt_container__1v8Qm">
                <div className="StoryExcerpt_content__2FL0_">
                  <span className="Tag_Tag__33_9b ">ViewPoints</span>
                  <span className="Tag_Tag__33_9b StoryExcerpt_plus__2djJX">
                    PLUS
                  </span>
                  <header>
                    <span className="StoryExcerpt_link__1H-rZ">
                      <h2 className="Typography_title__3mPFQ Typography_gutter__30K4M StoryExcerpt_title__1Y0s6 StoryExcerpt_sidebar__2P_sE">
                        ViewPoints: Veru hopes sabizabulin can fulfill Veklury’s
                        promise
                      </h2>
                    </span>
                  </header>
                </div>
              </article>
            </div>
          </header>
        </div>
      </div>
    </div>
  );
};

export default Users;

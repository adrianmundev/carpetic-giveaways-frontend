import VehicleOverview from "../common/VehicleOverview";

const Details = () => {
  return (
    <div className="col-lg-8">
      <div className="contest-details-content">
        <span className="subtitle">Enter now for a chance to win</span>
        <h2 className="contest-name">The Breeze Zodiac IX</h2>
        <div className="contest-details-meta">
          <ul>
            <li>
              <p>
                Contest No. <span>B2T</span>
              </p>
            </li>
            <li>
              <p>Drawn: 23 June 2020</p>
            </li>
          </ul>
          <p>
            Maximum of <span>29994</span> entries.
          </p>
        </div>
        <div className="contest-description">
          {/* vehicle Overview here */}
          <VehicleOverview />
        </div>
      </div>
    </div>
  );
};

export default Details;

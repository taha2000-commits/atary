import { useState } from "react";
import AsyncCustomSelect from "../../components/AsyncCustomSelect";
import { usePlatforms } from "../../services/api/platforms";
import { useSearchParams } from "react-router";

const FilterByPlatformSelect = () => {
  const [URLSearchParams, SetURLSearchParams] = useSearchParams();

  const [platformsPage, setPlatformsPage] = useState(1);

  const {
    data: platformsData,
    isLoadingPlatforms,
    platforms,
    isPlaceholderData: isPlaceholderPlatforms,
    number_pages,
  } = usePlatforms({ page: platformsPage, page_size: 6 });

  return (
    <AsyncCustomSelect
      title="platforms:"
      options={platforms?.map((e) => {
        return { name: e.name, value: e.id?.toString() };
      })}
      onChange={(option, selectedOption) => {
        if (option.name !== selectedOption?.name) {
          URLSearchParams.set("platform", option.value);
          SetURLSearchParams(URLSearchParams);
        }
      }}
      selectedOpt={{
        name:
          platforms?.filter(
            (platform) =>
              platform.id === parseInt(URLSearchParams.get("platform") || ""),
          )?.[0]?.name || "",
        value: URLSearchParams.get("platform") || "",
      }}
      paginated={{
        page: platformsPage,
        number_pages,
      }}
      isLoading={isLoadingPlatforms || isPlaceholderPlatforms}
      nextBtnOnClick={() => {
        setPlatformsPage((p) => (platformsData?.data.next ? p + 1 : p));
      }}
      prevBtnOnClick={() => {
        setPlatformsPage((p) => (platformsData?.data.previous ? p - 1 : p));
      }}
    />
  );
};

export default FilterByPlatformSelect;

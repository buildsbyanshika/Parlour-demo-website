import Blog from "../../components/pages/Blog";
import Breadcrumb from "@/global/Breadcrumb";

export default function BlogPage() {
    return (
        <>
            <Breadcrumb serviceTitle="Beauty Blogs"
                bgImageUrl="/images/makeup_bg.jpg" />
            <Blog />
        </>
    )
}

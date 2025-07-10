import './Panel.css'
import Nav from '../../components/Navbar/Nav'
import { Navigate } from 'react-router-dom'
function Panel() {

    return (
        <>

            <Nav />
            <section className="container-fluid my-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-12 border rounded shadow-sm d-flex flex-column g-4 mx-3 p-4 bg-light" style={{ direction: "rtl" }}>
                    <p className="fw-bold" style={{ fontFamily: "ll" }}>ویرایش اطلاعات کاربری</p>

                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            style={{ border: "2px solid #0881a3" }}
                            dir="ltr"
                            placeholder="نام کاربری"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                        <span
                            className="input-group-text"
                            style={{ border: "2px solid #0881a3", borderRadius: "50%" }}
                            id="basic-addon1"
                        >
                            @
                        </span>
                    </div>

                    <div className="input-group mb-3">
                        <span
                            className="input-group-text"
                            style={{
                                border: "2px solid #0881a3",
                                borderRadius: "5px",
                                borderLeft: "none",
                                marginLeft: "-8px"
                            }}
                            id="basic-addon2"
                        >
                            @example.com
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            dir="ltr"
                            style={{
                                border: "2px solid #0881a3",
                                borderRadius: "5px",
                                borderRight: "none"
                            }}
                            placeholder="email"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="basic-url" className="form-label">نام و نام خانوادگی</label>
                        <input
                            type="text"
                            style={{ border: "2px solid #0881a3" }}
                            className="form-control"
                            id="basic-url"
                            aria-describedby="basic-addon3 basic-addon4"
                        />
                    </div>

                    <p className="fw-bold" style={{ fontFamily: "bt", marginTop: "10px" }}>پلتفرم خود را انتخاب کنید</p>
                    <select
                        className="form-select mb-3"
                        aria-label="Default select example"
                        style={{ border: "2px solid #0881a3", borderRadius: "5px" }}
                    >
                        <option defaultValue>انتخاب کنید</option>
                        <option value="1">ویندوز</option>
                        <option value="2">مک</option>
                        <option value="3">لینوکس</option>
                    </select>

                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">درباره من</label>
                        <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="3"
                            style={{ border: "2px solid #0881a3", borderRadius: "5px" }}
                        ></textarea>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="formFile" className="form-label">آپلود عکس</label>
                        <input
                            className="form-control"
                            type="file"
                            id="formFile"
                            style={{ border: "2px solid #0881a3", borderRadius: "5px" }}
                            dir="ltr"
                        />
                    </div>

                    <button className="subbt">ذخیره تغییرات</button>
                </div>

                <div className="col-md-5 col-12 border rounded shadow-sm d-flex flex-column g-4 me-3 p-4 bg-light" style={{ height: "500px" }}>
                    <p className="fw-bold" style={{ fontFamily: "ll" }}>اطلاعیه‌های شما</p>
                    <div className="accordion my-2" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" style={{ border: "2px solid #0881a3" }}>
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{ fontFamily: "bt" }}>
                                    شروع دوره‌های آموزشی جدید
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body" style={{ fontFamily: "bn", border: "2px solid #0881a3" }}>
                                    به اطلاع علاقه‌مندان می‌رسانیم که به زودی دوره‌های آموزشی جدید برگزار خواهد شد...
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" style={{ border: "2px solid #0881a3" }}>
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{ fontFamily: "bt" }}>
                                    بروزرسانی و ارتقاء دیتا سنتر
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body" style={{ fontFamily: "bn", border: "2px solid #0881a3" }}>
                                    عملیات بروزرسانی در حال انجام است و ممکن است دسترسی با اختلال همراه باشد...
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" style={{ border: "2px solid #0881a3" }}>
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{ fontFamily: "bt" }}>
                                    روش‌های جدید شارژ حساب
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div className="accordion-body" style={{ fontFamily: "bn", border: "2px solid #0881a3" }}>
                                    به زودی روش‌های مختلف آنلاین و کیف پول برای شارژ فعال خواهند شد...
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="socialmedias col-12 col-md-6">
                    <p className="fw-bold p-2" style={{ fontFamily: "ll" }}>ما را در فضای مجازی دنبال کنید</p>
                    <ul>
                        <li><a href="#"><i className="bi bi-telegram"></i></a></li>
                        <li><a href="#"><i className="bi bi-instagram"></i></a></li>
                        <li><a href="#"><i className="bi bi-linkedin"></i></a></li>
                        <li><a href="#"><i className="bi bi-envelope-at-fill"></i></a></li>
                    </ul>
                </div>
            </div>
        </section>


        </>
    )
}
export default Panel
class AllCoursesSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="all-courses-section">
                <div class="choose-course-content">
                    <div class="course">
                        <div class="course-title">
                            <h1>Curso</h1>
                        </div>
                        <div class="course-picture">
                            <img src="https://lh3.googleusercontent.com/fife/ALs6j_FfkO0vivZmGAoThgZgjSkfcV_EQCOD7gKQwKJuTFTzt9EryVTkE58cjA4Dr7gz8VEjOwQpJRPhnaNhpfgpLhl_WQTQ6DTGY0xlElS6jCIWuJNussvNwtmteN667yKZtdocgkcUXtJNpHaiV6WJvZ2L9D2Ejbp--oT_5vvLmiCoZ7F7TRBF7TJ83Hq9wpkTTNtCrAFkONfrsczs30u1jTEAe4dP72G4IsBOkbAf44glTC0A_wfkTzSRVLmIaATchvNkW8ILOty2hqqevPuC4j4TOwKliPPz5wgHaS-vBvO8-zrU_rRrUFjz23EnAgKYWdIL6gb0nzLjS1wojvEsSekfkPy0i9ED4GueD0WnlyanraqS1AFlYGKkRqIXsZsRscSMBo8b5He1zE28wW3ccEWrepGvHvXw0h1ox0bJ-nDca1oUcCZ86z9DK0L80D7U5FDexOf6VeRh60CC_eZJhj9WCuRz0ZKka5yL1tdUZhVpFQMJDcwJSIB7saemE3xU7_VdZRVg4ip1jCU1s7nWxHYXH4Su01UXy9AxHJ09O6G4-nYlgtTgpUAFk1chqfWxxyHxnSv_n0lvkpqLTdlKbjFEQhNUbjlxKnVcniOUdX1FsoqkD4lGOZOrVSpKMii-BQWyV-qDM4Ek86adKzHLLdUztfEtGyTAnSh1FoqrDDKR1RS5oopPuG2I42DZbOg8oUQGB628j1--K7jOVY0-JoJoCAQfDPApvX4hKtptO5vXuD6p8IkJUTuUQ_2vDJlRKbs_HEYfQzvtMkzOaZFL36fifClfTr8urfKsjULzT_orj8qtDQFU9b_M5eYKT5pa1lcNDRnXWY2DKcjpU7mh2bd0FnCP-1D_HfpH3W7_-Ot7R2Wfkcg3SW2wX3797etZ4_XLvveT8BpMaVQgkmPyU43hd2CV5uytAxptxHhe2ZIx2C17vfQNBMuDUXv97CmIFaUa8seTlUu0mIndsbCqKcjJ-VbN1B_rHDIDWdiiKPdjKl-UKUcpu3G-RKsRT0MqybIDFLakejbtLbzr9jQyA3fm0MP6TDilmSWlX8GjA1HBI2JWfMmRDhoGdTo0Dw7VC-31iqDOnIJd8JAL5S0wuMvgA99KCYB7IxHAooyXwRQnyAJt-6GmgQ464JfhBEmb1vowrE75puy6PdodeqJPcVuj1toBDidD16W_AXY8Z2nOCY9Uz18dlLX0ewlnkhEDT_gKmn7JnUst3EnzOPpSU657hjr-33e3CpKJJqR0_8u1QUmjxphdy5AMehn7ROt4g5mwOj9iG11ESzFG-OqvU1_V4opjPeGVFky-mFayZHspby2C2XjvcZl1anPn3pNNxM8LaG6l2nlC3yctw6Cu9MAGO9ZPb1anFFdEpu8Z4e4IZDAsojTOBBKU9eajRBOU0KvEaa6Q8xy07B8yaWI7-5Hp2Laqw3x7MxHrFkBfHtaW4w0iLwYMbvEtHTITqHUtfvwD6zbyn-aUH-4oCNzZ2QmmAc28FzVInp8Biry4I06uRJpt5n7lSQqGJpU9e85LqD6H=s512" alt="">
                        </div>
                        <div class="course-btn">
                            <button>Ver curso</button>
                        </div>
                    </div>
                    <div class="course">
                        <div class="course-title">
                            <h1>Curso</h1>
                        </div>
                        <div class="course-picture">
                            <img src="https://lh3.googleusercontent.com/fife/ALs6j_FfkO0vivZmGAoThgZgjSkfcV_EQCOD7gKQwKJuTFTzt9EryVTkE58cjA4Dr7gz8VEjOwQpJRPhnaNhpfgpLhl_WQTQ6DTGY0xlElS6jCIWuJNussvNwtmteN667yKZtdocgkcUXtJNpHaiV6WJvZ2L9D2Ejbp--oT_5vvLmiCoZ7F7TRBF7TJ83Hq9wpkTTNtCrAFkONfrsczs30u1jTEAe4dP72G4IsBOkbAf44glTC0A_wfkTzSRVLmIaATchvNkW8ILOty2hqqevPuC4j4TOwKliPPz5wgHaS-vBvO8-zrU_rRrUFjz23EnAgKYWdIL6gb0nzLjS1wojvEsSekfkPy0i9ED4GueD0WnlyanraqS1AFlYGKkRqIXsZsRscSMBo8b5He1zE28wW3ccEWrepGvHvXw0h1ox0bJ-nDca1oUcCZ86z9DK0L80D7U5FDexOf6VeRh60CC_eZJhj9WCuRz0ZKka5yL1tdUZhVpFQMJDcwJSIB7saemE3xU7_VdZRVg4ip1jCU1s7nWxHYXH4Su01UXy9AxHJ09O6G4-nYlgtTgpUAFk1chqfWxxyHxnSv_n0lvkpqLTdlKbjFEQhNUbjlxKnVcniOUdX1FsoqkD4lGOZOrVSpKMii-BQWyV-qDM4Ek86adKzHLLdUztfEtGyTAnSh1FoqrDDKR1RS5oopPuG2I42DZbOg8oUQGB628j1--K7jOVY0-JoJoCAQfDPApvX4hKtptO5vXuD6p8IkJUTuUQ_2vDJlRKbs_HEYfQzvtMkzOaZFL36fifClfTr8urfKsjULzT_orj8qtDQFU9b_M5eYKT5pa1lcNDRnXWY2DKcjpU7mh2bd0FnCP-1D_HfpH3W7_-Ot7R2Wfkcg3SW2wX3797etZ4_XLvveT8BpMaVQgkmPyU43hd2CV5uytAxptxHhe2ZIx2C17vfQNBMuDUXv97CmIFaUa8seTlUu0mIndsbCqKcjJ-VbN1B_rHDIDWdiiKPdjKl-UKUcpu3G-RKsRT0MqybIDFLakejbtLbzr9jQyA3fm0MP6TDilmSWlX8GjA1HBI2JWfMmRDhoGdTo0Dw7VC-31iqDOnIJd8JAL5S0wuMvgA99KCYB7IxHAooyXwRQnyAJt-6GmgQ464JfhBEmb1vowrE75puy6PdodeqJPcVuj1toBDidD16W_AXY8Z2nOCY9Uz18dlLX0ewlnkhEDT_gKmn7JnUst3EnzOPpSU657hjr-33e3CpKJJqR0_8u1QUmjxphdy5AMehn7ROt4g5mwOj9iG11ESzFG-OqvU1_V4opjPeGVFky-mFayZHspby2C2XjvcZl1anPn3pNNxM8LaG6l2nlC3yctw6Cu9MAGO9ZPb1anFFdEpu8Z4e4IZDAsojTOBBKU9eajRBOU0KvEaa6Q8xy07B8yaWI7-5Hp2Laqw3x7MxHrFkBfHtaW4w0iLwYMbvEtHTITqHUtfvwD6zbyn-aUH-4oCNzZ2QmmAc28FzVInp8Biry4I06uRJpt5n7lSQqGJpU9e85LqD6H=s512" alt="">
                        </div>
                        <div class="course-btn">
                            <button>Ver curso</button>
                        </div>
                    </div>
                    <div class="course">
                        <div class="course-title">
                            <h1>Curso</h1>
                        </div>
                        <div class="course-picture">
                            <img src="https://lh3.googleusercontent.com/fife/ALs6j_FfkO0vivZmGAoThgZgjSkfcV_EQCOD7gKQwKJuTFTzt9EryVTkE58cjA4Dr7gz8VEjOwQpJRPhnaNhpfgpLhl_WQTQ6DTGY0xlElS6jCIWuJNussvNwtmteN667yKZtdocgkcUXtJNpHaiV6WJvZ2L9D2Ejbp--oT_5vvLmiCoZ7F7TRBF7TJ83Hq9wpkTTNtCrAFkONfrsczs30u1jTEAe4dP72G4IsBOkbAf44glTC0A_wfkTzSRVLmIaATchvNkW8ILOty2hqqevPuC4j4TOwKliPPz5wgHaS-vBvO8-zrU_rRrUFjz23EnAgKYWdIL6gb0nzLjS1wojvEsSekfkPy0i9ED4GueD0WnlyanraqS1AFlYGKkRqIXsZsRscSMBo8b5He1zE28wW3ccEWrepGvHvXw0h1ox0bJ-nDca1oUcCZ86z9DK0L80D7U5FDexOf6VeRh60CC_eZJhj9WCuRz0ZKka5yL1tdUZhVpFQMJDcwJSIB7saemE3xU7_VdZRVg4ip1jCU1s7nWxHYXH4Su01UXy9AxHJ09O6G4-nYlgtTgpUAFk1chqfWxxyHxnSv_n0lvkpqLTdlKbjFEQhNUbjlxKnVcniOUdX1FsoqkD4lGOZOrVSpKMii-BQWyV-qDM4Ek86adKzHLLdUztfEtGyTAnSh1FoqrDDKR1RS5oopPuG2I42DZbOg8oUQGB628j1--K7jOVY0-JoJoCAQfDPApvX4hKtptO5vXuD6p8IkJUTuUQ_2vDJlRKbs_HEYfQzvtMkzOaZFL36fifClfTr8urfKsjULzT_orj8qtDQFU9b_M5eYKT5pa1lcNDRnXWY2DKcjpU7mh2bd0FnCP-1D_HfpH3W7_-Ot7R2Wfkcg3SW2wX3797etZ4_XLvveT8BpMaVQgkmPyU43hd2CV5uytAxptxHhe2ZIx2C17vfQNBMuDUXv97CmIFaUa8seTlUu0mIndsbCqKcjJ-VbN1B_rHDIDWdiiKPdjKl-UKUcpu3G-RKsRT0MqybIDFLakejbtLbzr9jQyA3fm0MP6TDilmSWlX8GjA1HBI2JWfMmRDhoGdTo0Dw7VC-31iqDOnIJd8JAL5S0wuMvgA99KCYB7IxHAooyXwRQnyAJt-6GmgQ464JfhBEmb1vowrE75puy6PdodeqJPcVuj1toBDidD16W_AXY8Z2nOCY9Uz18dlLX0ewlnkhEDT_gKmn7JnUst3EnzOPpSU657hjr-33e3CpKJJqR0_8u1QUmjxphdy5AMehn7ROt4g5mwOj9iG11ESzFG-OqvU1_V4opjPeGVFky-mFayZHspby2C2XjvcZl1anPn3pNNxM8LaG6l2nlC3yctw6Cu9MAGO9ZPb1anFFdEpu8Z4e4IZDAsojTOBBKU9eajRBOU0KvEaa6Q8xy07B8yaWI7-5Hp2Laqw3x7MxHrFkBfHtaW4w0iLwYMbvEtHTITqHUtfvwD6zbyn-aUH-4oCNzZ2QmmAc28FzVInp8Biry4I06uRJpt5n7lSQqGJpU9e85LqD6H=s512" alt="">
                        </div>
                        <div class="course-btn">
                            <button>Ver curso</button>
                        </div>
                    </div>
                    <div class="course">
                        <div class="course-title">
                            <h1>Curso</h1>
                        </div>
                        <div class="course-picture">
                            <img src="https://lh3.googleusercontent.com/fife/ALs6j_FfkO0vivZmGAoThgZgjSkfcV_EQCOD7gKQwKJuTFTzt9EryVTkE58cjA4Dr7gz8VEjOwQpJRPhnaNhpfgpLhl_WQTQ6DTGY0xlElS6jCIWuJNussvNwtmteN667yKZtdocgkcUXtJNpHaiV6WJvZ2L9D2Ejbp--oT_5vvLmiCoZ7F7TRBF7TJ83Hq9wpkTTNtCrAFkONfrsczs30u1jTEAe4dP72G4IsBOkbAf44glTC0A_wfkTzSRVLmIaATchvNkW8ILOty2hqqevPuC4j4TOwKliPPz5wgHaS-vBvO8-zrU_rRrUFjz23EnAgKYWdIL6gb0nzLjS1wojvEsSekfkPy0i9ED4GueD0WnlyanraqS1AFlYGKkRqIXsZsRscSMBo8b5He1zE28wW3ccEWrepGvHvXw0h1ox0bJ-nDca1oUcCZ86z9DK0L80D7U5FDexOf6VeRh60CC_eZJhj9WCuRz0ZKka5yL1tdUZhVpFQMJDcwJSIB7saemE3xU7_VdZRVg4ip1jCU1s7nWxHYXH4Su01UXy9AxHJ09O6G4-nYlgtTgpUAFk1chqfWxxyHxnSv_n0lvkpqLTdlKbjFEQhNUbjlxKnVcniOUdX1FsoqkD4lGOZOrVSpKMii-BQWyV-qDM4Ek86adKzHLLdUztfEtGyTAnSh1FoqrDDKR1RS5oopPuG2I42DZbOg8oUQGB628j1--K7jOVY0-JoJoCAQfDPApvX4hKtptO5vXuD6p8IkJUTuUQ_2vDJlRKbs_HEYfQzvtMkzOaZFL36fifClfTr8urfKsjULzT_orj8qtDQFU9b_M5eYKT5pa1lcNDRnXWY2DKcjpU7mh2bd0FnCP-1D_HfpH3W7_-Ot7R2Wfkcg3SW2wX3797etZ4_XLvveT8BpMaVQgkmPyU43hd2CV5uytAxptxHhe2ZIx2C17vfQNBMuDUXv97CmIFaUa8seTlUu0mIndsbCqKcjJ-VbN1B_rHDIDWdiiKPdjKl-UKUcpu3G-RKsRT0MqybIDFLakejbtLbzr9jQyA3fm0MP6TDilmSWlX8GjA1HBI2JWfMmRDhoGdTo0Dw7VC-31iqDOnIJd8JAL5S0wuMvgA99KCYB7IxHAooyXwRQnyAJt-6GmgQ464JfhBEmb1vowrE75puy6PdodeqJPcVuj1toBDidD16W_AXY8Z2nOCY9Uz18dlLX0ewlnkhEDT_gKmn7JnUst3EnzOPpSU657hjr-33e3CpKJJqR0_8u1QUmjxphdy5AMehn7ROt4g5mwOj9iG11ESzFG-OqvU1_V4opjPeGVFky-mFayZHspby2C2XjvcZl1anPn3pNNxM8LaG6l2nlC3yctw6Cu9MAGO9ZPb1anFFdEpu8Z4e4IZDAsojTOBBKU9eajRBOU0KvEaa6Q8xy07B8yaWI7-5Hp2Laqw3x7MxHrFkBfHtaW4w0iLwYMbvEtHTITqHUtfvwD6zbyn-aUH-4oCNzZ2QmmAc28FzVInp8Biry4I06uRJpt5n7lSQqGJpU9e85LqD6H=s512" alt="">
                        </div>
                        <div class="course-btn">
                            <button>Ver curso</button>
                        </div>
                    </div>
                    <div class="course">
                        <div class="course-title">
                            <h1>Curso</h1>
                        </div>
                        <div class="course-picture">
                            <img src="https://lh3.googleusercontent.com/fife/ALs6j_FfkO0vivZmGAoThgZgjSkfcV_EQCOD7gKQwKJuTFTzt9EryVTkE58cjA4Dr7gz8VEjOwQpJRPhnaNhpfgpLhl_WQTQ6DTGY0xlElS6jCIWuJNussvNwtmteN667yKZtdocgkcUXtJNpHaiV6WJvZ2L9D2Ejbp--oT_5vvLmiCoZ7F7TRBF7TJ83Hq9wpkTTNtCrAFkONfrsczs30u1jTEAe4dP72G4IsBOkbAf44glTC0A_wfkTzSRVLmIaATchvNkW8ILOty2hqqevPuC4j4TOwKliPPz5wgHaS-vBvO8-zrU_rRrUFjz23EnAgKYWdIL6gb0nzLjS1wojvEsSekfkPy0i9ED4GueD0WnlyanraqS1AFlYGKkRqIXsZsRscSMBo8b5He1zE28wW3ccEWrepGvHvXw0h1ox0bJ-nDca1oUcCZ86z9DK0L80D7U5FDexOf6VeRh60CC_eZJhj9WCuRz0ZKka5yL1tdUZhVpFQMJDcwJSIB7saemE3xU7_VdZRVg4ip1jCU1s7nWxHYXH4Su01UXy9AxHJ09O6G4-nYlgtTgpUAFk1chqfWxxyHxnSv_n0lvkpqLTdlKbjFEQhNUbjlxKnVcniOUdX1FsoqkD4lGOZOrVSpKMii-BQWyV-qDM4Ek86adKzHLLdUztfEtGyTAnSh1FoqrDDKR1RS5oopPuG2I42DZbOg8oUQGB628j1--K7jOVY0-JoJoCAQfDPApvX4hKtptO5vXuD6p8IkJUTuUQ_2vDJlRKbs_HEYfQzvtMkzOaZFL36fifClfTr8urfKsjULzT_orj8qtDQFU9b_M5eYKT5pa1lcNDRnXWY2DKcjpU7mh2bd0FnCP-1D_HfpH3W7_-Ot7R2Wfkcg3SW2wX3797etZ4_XLvveT8BpMaVQgkmPyU43hd2CV5uytAxptxHhe2ZIx2C17vfQNBMuDUXv97CmIFaUa8seTlUu0mIndsbCqKcjJ-VbN1B_rHDIDWdiiKPdjKl-UKUcpu3G-RKsRT0MqybIDFLakejbtLbzr9jQyA3fm0MP6TDilmSWlX8GjA1HBI2JWfMmRDhoGdTo0Dw7VC-31iqDOnIJd8JAL5S0wuMvgA99KCYB7IxHAooyXwRQnyAJt-6GmgQ464JfhBEmb1vowrE75puy6PdodeqJPcVuj1toBDidD16W_AXY8Z2nOCY9Uz18dlLX0ewlnkhEDT_gKmn7JnUst3EnzOPpSU657hjr-33e3CpKJJqR0_8u1QUmjxphdy5AMehn7ROt4g5mwOj9iG11ESzFG-OqvU1_V4opjPeGVFky-mFayZHspby2C2XjvcZl1anPn3pNNxM8LaG6l2nlC3yctw6Cu9MAGO9ZPb1anFFdEpu8Z4e4IZDAsojTOBBKU9eajRBOU0KvEaa6Q8xy07B8yaWI7-5Hp2Laqw3x7MxHrFkBfHtaW4w0iLwYMbvEtHTITqHUtfvwD6zbyn-aUH-4oCNzZ2QmmAc28FzVInp8Biry4I06uRJpt5n7lSQqGJpU9e85LqD6H=s512" alt="">
                        </div>
                        <div class="course-btn">
                            <button>Ver curso</button>
                        </div>
                    </div>
                    <div class="course">
                        <div class="course-title">
                            <h1>Curso</h1>
                        </div>
                        <div class="course-picture">
                            <img src="https://lh3.googleusercontent.com/fife/ALs6j_FfkO0vivZmGAoThgZgjSkfcV_EQCOD7gKQwKJuTFTzt9EryVTkE58cjA4Dr7gz8VEjOwQpJRPhnaNhpfgpLhl_WQTQ6DTGY0xlElS6jCIWuJNussvNwtmteN667yKZtdocgkcUXtJNpHaiV6WJvZ2L9D2Ejbp--oT_5vvLmiCoZ7F7TRBF7TJ83Hq9wpkTTNtCrAFkONfrsczs30u1jTEAe4dP72G4IsBOkbAf44glTC0A_wfkTzSRVLmIaATchvNkW8ILOty2hqqevPuC4j4TOwKliPPz5wgHaS-vBvO8-zrU_rRrUFjz23EnAgKYWdIL6gb0nzLjS1wojvEsSekfkPy0i9ED4GueD0WnlyanraqS1AFlYGKkRqIXsZsRscSMBo8b5He1zE28wW3ccEWrepGvHvXw0h1ox0bJ-nDca1oUcCZ86z9DK0L80D7U5FDexOf6VeRh60CC_eZJhj9WCuRz0ZKka5yL1tdUZhVpFQMJDcwJSIB7saemE3xU7_VdZRVg4ip1jCU1s7nWxHYXH4Su01UXy9AxHJ09O6G4-nYlgtTgpUAFk1chqfWxxyHxnSv_n0lvkpqLTdlKbjFEQhNUbjlxKnVcniOUdX1FsoqkD4lGOZOrVSpKMii-BQWyV-qDM4Ek86adKzHLLdUztfEtGyTAnSh1FoqrDDKR1RS5oopPuG2I42DZbOg8oUQGB628j1--K7jOVY0-JoJoCAQfDPApvX4hKtptO5vXuD6p8IkJUTuUQ_2vDJlRKbs_HEYfQzvtMkzOaZFL36fifClfTr8urfKsjULzT_orj8qtDQFU9b_M5eYKT5pa1lcNDRnXWY2DKcjpU7mh2bd0FnCP-1D_HfpH3W7_-Ot7R2Wfkcg3SW2wX3797etZ4_XLvveT8BpMaVQgkmPyU43hd2CV5uytAxptxHhe2ZIx2C17vfQNBMuDUXv97CmIFaUa8seTlUu0mIndsbCqKcjJ-VbN1B_rHDIDWdiiKPdjKl-UKUcpu3G-RKsRT0MqybIDFLakejbtLbzr9jQyA3fm0MP6TDilmSWlX8GjA1HBI2JWfMmRDhoGdTo0Dw7VC-31iqDOnIJd8JAL5S0wuMvgA99KCYB7IxHAooyXwRQnyAJt-6GmgQ464JfhBEmb1vowrE75puy6PdodeqJPcVuj1toBDidD16W_AXY8Z2nOCY9Uz18dlLX0ewlnkhEDT_gKmn7JnUst3EnzOPpSU657hjr-33e3CpKJJqR0_8u1QUmjxphdy5AMehn7ROt4g5mwOj9iG11ESzFG-OqvU1_V4opjPeGVFky-mFayZHspby2C2XjvcZl1anPn3pNNxM8LaG6l2nlC3yctw6Cu9MAGO9ZPb1anFFdEpu8Z4e4IZDAsojTOBBKU9eajRBOU0KvEaa6Q8xy07B8yaWI7-5Hp2Laqw3x7MxHrFkBfHtaW4w0iLwYMbvEtHTITqHUtfvwD6zbyn-aUH-4oCNzZ2QmmAc28FzVInp8Biry4I06uRJpt5n7lSQqGJpU9e85LqD6H=s512" alt="">
                        </div>
                        <div class="course-btn">
                            <button>Ver curso</button>
                        </div>
                    </div>
                   
                </div>
            </div>`;
    }
}

customElements.define('all-courses-section', AllCoursesSection);